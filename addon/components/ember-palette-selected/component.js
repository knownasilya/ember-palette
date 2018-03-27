import { htmlSafe } from '@ember/string';
import Component from '@ember/component';
import layout from './template';
import cssColor from '../../utils/css-color';

export default Component.extend({
  layout,
  classNames: ['selected-color-item'],
  attributeBindings: ['style'],
  style: '',

  didReceiveAttrs() {
    let option = this.get('option');
    let color = cssColor(option) ? option : '#374046';

    this.set('style', htmlSafe(`background-color: ${color}`));
  }
});
