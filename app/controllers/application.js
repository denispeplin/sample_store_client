import Ember from 'ember';

// todo: move to i18n or database
var helpTexts = {
  invoices: 'Invoices must be already added from `rake db:seed`. \
    Place them to add products.',
  products: 'Reserve some products, they will be added to orders. \
    If amount left is less than minimum, bids will be created after selling. \
    Use `Show Settings` button to change minimum amount individually.',
  orders: 'Sell orders. Products with amount less than minumum will be added to bid.',
  bids: 'Place bids, new invoices will be created. Multiple bids can be combined.',
  'settings.index': 'Change settings'
}

export default Ember.Controller.extend({
  helpText: function() {
    return helpTexts[this.get('currentPath')];
  }.property('currentPath')
});
