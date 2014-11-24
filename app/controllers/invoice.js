import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    receive: function(invoice) {
      console.log(invoice);
    }
  }
});
