import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    sell: function() {
      this.set('sold', true);
      var self = this;
      this.get('model').save().then(function () {
      }, function (response) {
        self.set('errors', response.responseJSON.errors);
      });
    }
  }
});
