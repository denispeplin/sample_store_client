import DS from 'ember-data';

export default DS.Model.extend({
  placed: DS.attr('boolean'),
  bidProducts: DS.hasMany('bid-product')
});
