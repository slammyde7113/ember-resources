import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('lists');
  this.route('list', { path: 'lists/:list_id' });
  this.route('games');
  // this.route('game', { path: 'games/:game_id'});
});

export default Router;
