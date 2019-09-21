import DS from 'ember-data';
/**
 * Import the ENV variable for the project.
 * Note that 'data-example' should be your project name.
 */
import ENV from 'data-example/config/environment';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  /**
   * OMDBAPI does not follow expected ember convention
   * Here, we remove the default handling where ember
   * appends the model name to the URL.
   */
  pathForType() {
    return '';
  },
  buildURL(modelName, id, snapshot, requestType, query = {}) {
    /**
     * Add the API key to every query.
     */
    query.apikey = ENV.OMDB_API_KEY;
    return this._super(...arguments);
  }
});
