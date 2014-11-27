import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  amount: DS.attr('number'),
  price: DS.attr('number'),
  bid: DS.belongsTo('bid')
});
