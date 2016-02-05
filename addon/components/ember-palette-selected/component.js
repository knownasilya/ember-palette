import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  classNames: ['selected-color-item'],
  attributeBindings: ['style'],
  style: '',

  didReceiveAttrs() {
    var selected = this.get('selected');

    this.set('style', `background-color: ${selected}`);
  }
});
