import Ember from 'ember';

export default Ember.Component.extend({
  editable: true,
  showInput: Ember.computed.and('editable', 'isEditing'),
  actions: {
    toggleEditing: function() {
      this.toggleProperty('isEditing');
    }
  }
});
