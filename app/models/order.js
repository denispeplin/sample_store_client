import DS from 'ember-data';

export default DS.Model.extend({
  sold: DS.attr('boolean'),
  orderProducts: DS.hasMany('order-product')
});
