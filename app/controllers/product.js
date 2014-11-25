import Ember from 'ember';

export default Ember.ObjectController.extend({
  totalPrice: function() {
    return (this.get('price') * this.get('reserve')).toFixed(2);
  }.property('price', 'reserve')
});
