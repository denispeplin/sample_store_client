import Ember from 'ember';

export default Ember.ObjectController.extend({
  panelClass: function() {
    if (this.get('placed')) {
      return 'panel-success';
    } else {
      return this.get('selected') ? 'panel-primary' : 'panel-info';
    }
  }.property('placed', 'selected'),
  actions: {
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
