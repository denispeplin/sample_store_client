import DS from 'ember-data';

export default DS.Model.extend({
  created_at: DS.attr('date'),
  received: DS.attr('boolean'),
  invoiceProducts: DS.hasMany('invoice-product')
});
