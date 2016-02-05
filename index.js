/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-palette',


  included: function(app, parentAddon) {
    var target = (parentAddon || app);

    target.import('vendor/ember-palette.css');
  }
};
