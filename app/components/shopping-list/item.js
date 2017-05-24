import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listItemCompleted'],
  listItemCompleted: Ember.computed.alias('item.done'),
  actions: {
    toggleDone () {
      // return this.toggleProperty('listItemCompleted');
      console.log('inside item Component, this.get item is:', this.get('item'));
      return this.sendAction('toggleDone', this.get('item'))
    },
  },
});
