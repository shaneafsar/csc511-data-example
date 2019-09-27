import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | fancy-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FancyButton />`);

    assert.equal(
      this.element.textContent.trim(),
      'Test - newValue',
      'prop is new value'
    );

    await click('#test');

    assert.equal(this.element.textContent.trim(), 'Test - cake');
  });
});
