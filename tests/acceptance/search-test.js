import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /index', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });

  test('visiting /index and clicking button', async function(assert) {
    await visit('/');
    await click('#test');

    assert.equal(currentURL(), '/?s=star');
  });
});
