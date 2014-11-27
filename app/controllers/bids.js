import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'bid',
  selectedCount: 0,
  selectedMany: false,
  selectedBids: function() {
    return this.filter(function(bid) {
      return bid.get('selected');
    }).map(function(bid) {
      return bid.get('id');
    });
  }.property('selectedCount')
});
