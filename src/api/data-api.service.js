import axios from 'axios';
import { merge } from 'lodash';
import entitiesNormalizerFactory from './normalize-utils/entities-normalizer-factory';

const DEFAULTS = {
  delay: 1800,
  normalize: true,
  key: null,
};

const port = 3100;
const baseUrl = `http://localhost:${port}`;

export function resolveAfter(data, delay) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(data);
    }, delay);
  });
}

function validateOptions(options) {
  const { key, normalize } = options;
  if (normalize && (!key || key.length < 1)) {
    throw new Error(`Missing required normalization 'key'`);
  }
}

export default class DataApiService {
  constructor(url, options = {}) {
    this.url = url;
    this.options = merge(DEFAULTS, options);
    validateOptions(this.options);
    if (this._isNormalizationActive()) {
      this.normalizer = entitiesNormalizerFactory(options.key);
    }
  }

  find(id) {
    return axios.get(this._getSingleUrl({ id }))
      .then((response) => {
        if (this._isNormalizationActive()) {
          return this.normalizer.entity(response.data);
        } else {
          return response.data;
        }
      })
      .then((entity) => resolveAfter(entity, this.options.delay));
  }

  update(entity) {
    return axios.put(this._getSingleUrl(entity), entity)
      .then((response) => {
        if (this._isNormalizationActive()) {
          return this.normalizer.entity(response.data);
        } else {
          return response.data;
        }
      })
      .then((entity) => resolveAfter(entity, this.options.delay));
  }

  remove(entity) {
    return axios.delete(this._getSingleUrl(entity))
      .then(() => entity.id)
      .then((id) => resolveAfter(id, this.options.delay));
  }

  create(entity) {
    return axios.post(this._getUrl(), entity)
      .then((response) => {
        if (this._isNormalizationActive()) {
          return this.normalizer.entity(response.data);
        } else {
          return response.data;
        }
      })
      .then((created) => resolveAfter(created, this.options.delay));
  }

  getAll(params = {}) {
    return axios.get(this._getUrl())
      .then((response) => {
        if (this._isNormalizationActive()) {
          return this.normalizer.array(response.data);
        } else {
          return response.data;
        }
      })
      .then((data) => resolveAfter(data, this.options.delay));
  }

  _isNormalizationActive() {
    return this.options.normalize;
  }

  _transformData() {

  }

  _getUrl() {
    return `${baseUrl}${this.url}`;
  }

  _getSingleUrl(entity) {
    return `${this._getUrl()}/${entity.id}`;
  }
}
