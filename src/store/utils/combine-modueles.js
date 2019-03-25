import { merge } from 'lodash';

export default function combineModules(modules) {
  return merge({}, ...modules);
}
