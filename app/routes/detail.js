import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    // Example of using the same model/serializer
    return this.store.queryRecord('result', { i: params.id });

    // Example of using a different model/serializer
    // return this.store.queryRecord('detailed', { i: params.id });
  }
});
