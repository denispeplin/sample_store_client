import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'product',
  settingsShown: false,
  actions: {
    toggleSettings: function() {
      this.toggleProperty('settingsShown');
    }
  }
});
