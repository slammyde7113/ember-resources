import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save (list) {
      list.save()
        .then(() => {
          console.log('yoyoyo');
          this.transitionTo('lists');
        });
    }
  },
});
