import Ember from 'ember';
import layout from './template';
import cssColor from '../../utils/css-color';

export default Ember.Component.extend({
  layout,
  classNames: ['selected-color-item'],
  attributeBindings: ['style'],
  style: '',

  didReceiveAttrs() {
    let selected = this.get('option');
    let color = cssColor(selected) ? selected : '#374046';

    this.set('style', Ember.String.htmlSafe(`background-color: ${color}`));
  }
});
