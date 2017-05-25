import Ember from 'ember';

export default Ember.Route.extend({
  // THERE AIN'T NO DAMN MODEL FUNCTION
  model (params) {
    return this.get('store').findRecord('list', params.list_id)
  },
  actions: {
    toggleItemDone (item) {
      console.log('inside route layer item is :', item.get('done'));
      // actually make API req
      item.toggleProperty('done');
      item.save();
    },
    deleteItem (item) {
      console.log('inside route layer item is :', item.get('done'));
      // actually make API req
      item.destroyRecord();
      // item.deleteRecord()
      // item.save()
    },
    createItem (data) {
      console.log('new data is :', data);
      let itemRecord = this.get('store').createRecord('item', data);
      itemRecord.save();
    }
  }
});
