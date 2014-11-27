import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['bids'],
  selectedCount: Ember.computed.alias('controllers.bids.selectedCount'),
  selectedMany: Ember.computed.alias('controllers.bids.selectedMany'),
  selectedBids: Ember.computed.alias('controllers.bids.selectedBids'),
  trackSelected: function() {
    if (this.get('selected')) {
      this.incrementProperty('selectedCount');
    } else {
      this.decrementProperty('selectedCount');
    }
    this.set('selectedMany', this.get('selectedCount') > 1 ? true : false);
  }.observes('selected'),
  panelClass: function() {
    if (this.get('placed')) {
      return 'panel-success';
    } else {
      return this.get('selected') ? 'panel-primary' : 'panel-info';
    }
  }.property('placed', 'selected'),
  actions: {
    combine: function() {
      this.set('combine', this.get('selectedBids'));
      var self = this;
      this.get('model').save().then(function () {
      }, function (response) {
        self.set('errors', response.responseJSON.errors);
      });
    },
    place: function() {
      this.set('placed', true);
      var self = this;
      this.get('model').save().then(function () {
      }, function (response) {
        self.set('errors', response.responseJSON.errors);
      });
    }
  }
});
