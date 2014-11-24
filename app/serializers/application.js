import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  serializeHasMany: function(record, json, relationship) {
    var key = relationship.key;
    json[this.keyForRelationship(key, "hasMany")] = record.get(key).mapBy(this.get("primaryKey"));
  }
});
