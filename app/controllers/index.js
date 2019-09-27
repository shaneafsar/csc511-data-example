import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['s'],
  actions: {
    submit() {
      this.transitionToRoute('index', { queryParams: { s: 'star' } });
      alert('submit pressed!');
    }
  }
});
