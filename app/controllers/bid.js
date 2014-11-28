import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['bids'],
  selectedMany: Ember.computed.alias('controllers.bids.selectedMany'),
  selectedBids: Ember.computed.alias('controllers.bids.selectedBids'),
  panelClass: function() {
    if (this.get('placed')) {
      return 'panel-success';
    } else {
      return this.get('selected') ? 'panel-primary' : 'panel-info';
    }
  }.property('placed', 'selected'),
  actions: {
    combine: function() {
      this.set('selected', false);
      this.set('combine', this.get('selectedBids'));
      var self = this;
      this.get('model').save().then(function () {
        self.send('refreshRoute');
      }, function (response) {
        self.set('errors', response.responseJSON.errors);
      });
    },
    place: function() {
      this.set('selected', false);
      this.set('placed', true);
      var self = this;
      this.get('model').save().then(function () {
      }, function (response) {
        self.set('errors', response.responseJSON.errors);
      });
    }
  }
});
