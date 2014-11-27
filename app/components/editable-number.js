import Ember from 'ember';

export default Ember.Component.extend({
  showInput: Ember.computed.and('editable', 'isEditing'),
  actions: {
    toggleEditing: function() {
      this.toggleProperty('isEditing');
    }
  }
});
