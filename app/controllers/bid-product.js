import Ember from 'ember';

export default Ember.ObjectController.extend({
  bidActive: Ember.computed.not('bid.placed'),
  actions: {
    save: function() {
      var self = this;
      this.get('model').save().then(function () {
        self.set('isEditing', false);
      }, function (response) {
        self.set('errors', response.responseJSON.errors);
      });
    }
  }
});
