import { normalize, schema } from 'normalizr';

export default function entitiesNormalizerFactory(key) {
  if (typeof key !== 'string' || key.length < 1) {
    throw new Error(`Normalization: missing required 'key' argument`);
  }
  const entitySchema = new schema.Entity(key);
  const entityListSchema = { [key]: [entitySchema] };

  return {
    array(entities) {
      return normalize({ [key]: entities }, entityListSchema);
    },

    entity(singleEntity) {
      return this.array([singleEntity]);
    },
  };
}
