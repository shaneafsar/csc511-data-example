import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['s'],
  prop1: 'test',
  actions: {
    submit() {
      this.transitionToRoute('index', { queryParams: { s: 'lion' } });
    },
    update() {
      this.set('prop1', 'updated');
    }
  }
});
