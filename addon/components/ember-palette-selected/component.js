import Ember from 'ember';
import layout from './template';
import cssColor from '../../utils/css-color';

export default Ember.Component.extend({
  layout,
  classNames: ['selected-color-item'],
  attributeBindings: ['style'],
  style: '',

  didReceiveAttrs() {
    let option = this.get('option');
    let color = cssColor(option) ? option : '#374046';

    this.set('style', Ember.String.htmlSafe(`background-color: ${color}`));
  }
});
