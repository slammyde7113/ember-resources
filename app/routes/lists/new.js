import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('list', {});
  },

  actions: {
    editList (list) {
      this.transitionTo('list.edit', list);
    },

    createList(list) {
      list.save()
        .then(()=>this.transitionTo('lists'));
    },

    cancelCreateList(list) {
      list.rollbackAttributes();
      this.transitionTo('lists');
    },
  },
});
