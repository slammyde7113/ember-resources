import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listItemCompleted'],
  listItemCompleted: Ember.computed.alias('item.done'),
  actions: {
    toggleDone () {
      console.log("you're inside toggleDone in listr-list/item Component, and this.get(item) is ", this.get('item'));
      this.sendAction('toggleDone', this.get('item'));
      // return this.toggleProperty('listItemCompleted');
    },
  },
});
