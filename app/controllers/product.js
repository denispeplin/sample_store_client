import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['products'],
  actions: {
    save: function() {
      var self = this;
      this.get('model').save().then(function () {
      }, function (response) {
        self.set('errors', response.responseJSON.errors);
      });
    }
  },
  settingsShown: Ember.computed.alias('controllers.products.settingsShown'),
  totalPrice: function() {
    return (this.get('price') * this.get('reserve')).toFixed(2);
  }.property('price', 'reserve'),
  notReserving: function() {
    return this.get('reserve') < 1;
  }.property('reserve'),
  isMinAmount: function() {
    return (!!this.get('minAmount') && this.get('isDirty'));
  }.property('minAmount', 'isDirty')
});
