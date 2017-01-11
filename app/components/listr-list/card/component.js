import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editList(){
      console.log("You're inside editList in the listr-list/card component");
    },
  },
});
