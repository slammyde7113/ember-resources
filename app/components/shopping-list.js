import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['listr'],
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: false,
  newItem: {
    content: null,
    done: false
  },
  actions: {
    toggleListDetail () {
      return this.toggleProperty('listDetailHidden');
    },
    toggleItemDone (item) {
      console.log('in shopping-list, item is :', item.get('content'));
      return this.sendAction('toggleItemDone', item);
    },
    deleteItem (item) {
      console.log('in shopping-list delete, item is :', item.get('content'));
      return this.sendAction('deleteItem', item);
    },
    createItem () {
      // this.get('newItem');
      let data = this.get('newItem');
      data.list = this.get('list');
      this.sendAction('createItem', data);
      this.set('newItem.content', null);
      // order matters here. this.get().set not a funciton in
      // opposite order
    }
  },

});
