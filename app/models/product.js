import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  amount: DS.attr('number'),
  price: DS.attr('number'),
  reserve: DS.attr('number')
});
