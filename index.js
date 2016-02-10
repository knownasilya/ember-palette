/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-palette',


  included: function(app, parentAddon) {
    var target = (parentAddon || app);

    this._super.included.apply(this, arguments);

    target.import('vendor/ember-palette.css');
  }
};
