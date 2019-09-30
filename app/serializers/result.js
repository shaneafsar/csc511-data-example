import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  primaryKey: 'imdbID',
  keyForAttribute(key) {
    return key;
  },
  normalizeResponse(store, primaryModelClass, payload) {
    if (payload.Search) {
      payload.data = payload.Search;
      payload.data.forEach(item => {
        item.type = primaryModelClass.modelName; //'result'
        item.attributes = {
          Title: item.Title,
          Year: item.Year,
          Yype: item.Type,
          Poster: item.Poster
        };
        delete item.Title;
        delete item.Year;
        delete item.Type;
        delete item.Poster;
      });

      delete payload.Search;
    } else {
      payload.data = {};
      payload.data.imdbID = payload.imdbID;
      payload.data.type = primaryModelClass.modelName;
      payload.data.attributes = {
        Title: payload.Title,
        Year: payload.Year,
        Yype: payload.Type,
        Poster: payload.Poster
      };
    }
    return this._super(...arguments);
  }
});
