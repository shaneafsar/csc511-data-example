import DS from 'ember-data';

/**
 * This is an example of using a separate model and serializer
 * to query for a single record.
 */
export default DS.JSONAPISerializer.extend({
  primaryKey: 'imdbID',
  keyForAttribute(key) {
    return key;
  },
  normalizeResponse(store, primaryModelClass, payload) {
    payload.data = {};
    payload.data.imdbID = payload.imdbID;
    payload.data.type = primaryModelClass.modelName;
    payload.data.attributes = {
      Title: payload.Title,
      Year: payload.Year,
      Yype: payload.Type,
      Poster: payload.Poster,
      Plot: payload.Plot
    };
    return this._super(...arguments);
  }
});
