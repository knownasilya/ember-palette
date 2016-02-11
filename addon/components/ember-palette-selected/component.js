import Ember from 'ember';
import layout from './template';
import cssColor from '../../utils/css-color';

export default Ember.Component.extend({
  layout,
  classNames: ['selected-color-item'],
  attributeBindings: ['style'],
  style: '',

  didReceiveAttrs() {
    var selected = this.get('selected');
    var color = cssColor(selected) ? selected : '#374046';

    this.set('style', new Ember.Handlebars.SafeString(`background-color: ${color}`));
  }
});
