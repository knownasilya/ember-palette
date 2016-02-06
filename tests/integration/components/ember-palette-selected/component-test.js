import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-palette-selected', 'Integration | Component | ember palette selected', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ember-palette-selected selected='#2196f3'}}`);

  assert.equal(this.$('.selected-color-item').css('background-color'), 'rgb(33, 150, 243)');
});
