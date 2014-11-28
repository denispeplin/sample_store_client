import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'product',
  settingsShown: true,
  actions: {
    toggleSettings: function() {
      this.toggleProperty('settingsShown');
    }
  }
});
