import Component from '@ember/component';

export default Component.extend({
  prop1: 'newValue',
  actions: {
    update() {
      this.set('prop1', 'cake');
    }
  }
});
