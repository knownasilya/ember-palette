/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-palette',


  included: function(app, parentAddon) {
    var target = (parentAddon || app);

    // necessary for nested usage
    // parent addon should call `this._super.included.apply(this, arguments);`
    if (target.app) {
      target = target.app;
    }

    this.app = target;
    this._super.included.apply(this, arguments);

    target.import('vendor/ember-palette.css');
  }
};
