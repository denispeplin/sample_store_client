import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('invoices');
  this.resource('products');
  this.resource('orders');
  this.resource('bids');
  this.resource('settings', function() { });
});

export default Router;
