import Ember from 'ember';

export default Ember.Component.extend({
  editable: false,
  actions: {
    edit () {
      this.set('editable', true)
    },

    save () {
      this.sendAction('save', this.get('list'));
      this.set('editable', false)
    },

    delete () {
      this.sendAction('delete', this.get('list'));
    },
  },
});
