import Ember from 'ember';
import DS from 'ember-data';

DS.RESTAdapter.reopen({
  pathForType: function(type) {
    var decamelized = Ember.String.decamelize(type);
    return Ember.String.pluralize(decamelized);
  }
});

export default DS.RESTAdapter.extend({
});
