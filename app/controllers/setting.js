import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function() {
      var self = this;
      this.get('model').save().then(function () {
      }, function (response) {
        self.set('errors', response.responseJSON.errors);
      });
    }
  },
});
