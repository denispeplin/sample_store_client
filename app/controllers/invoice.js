import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    receive: function() {
      this.set('received', true);
      var self = this;
      this.get('model').save().then(function () {
      }, function (response) {
        self.set('errors', response.responseJSON.errors);
      });
    }
  }
});
