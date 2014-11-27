import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('bid', params);
  },
  actions: {
    refreshRoute: function() {
      this.refresh();
    }
  }
});
