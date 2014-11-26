import Ember from 'ember';

export default Ember.ObjectController.extend({
  panelClass: function() {
    if (this.get('placed')) {
      return 'panel-success';
    } else {
      return this.get('selected') ? 'panel-primary' : 'panel-info';
    }
  }.property('placed', 'selected')
});
