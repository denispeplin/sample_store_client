import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'bid',
  selectedBids: function() {
    return this.filter(function(bid) {
      return bid.get('selected');
    }).map(function(bid) {
      return bid.get('id');
    });
  }.property('@each.selected'),
  selectedMany: Ember.computed.gt('selectedBids.length', 1)
});
