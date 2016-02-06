import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('color-palette', 'Integration | Component | color palette', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.set('color', '#2196f3');

  this.render(hbs`
    {{color-palette selected=color onselect=(action (mut color))}}
    <div id="color-1" style="background-color: {{color}}"></div>
  `);

  assert.equal(this.$('#color-1').css('background-color'), 'rgb(33, 150, 243)');
  assert.equal(this.$('.ember-palette .selected-color-item').css('background-color'), 'rgb(33, 150, 243)');
});
