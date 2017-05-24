import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['listr'],
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: false,
  actions: {
    toggleListDetail () {
      return this.toggleProperty('listDetailHidden');
    },
    toggleItemDone (item) {
      console.log('in shopping-list, item is :', item.get('content'));
      return this.sendAction('toggleItemDone', item)
    }
  },
});
