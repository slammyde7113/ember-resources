import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('list');
  },
  actions: {
    editTitle (list) {
      console.log('my code works');
      this.transitionTo('list-edit', list)
    }
  }
});
