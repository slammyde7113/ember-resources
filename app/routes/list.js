import Ember from 'ember';

export default Ember.Route.extend({
  // THERE AIN'T NO DAMN MODEL FUNCTION
  model (params) {
    return this.get('store').findRecord('list', params.list_id)
  }
});
