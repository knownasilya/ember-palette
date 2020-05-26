# ember-palette

Simple palette component for choosing a predefined color

[![NPM][npm-badge-img]][npm-badge-link]
[![Build Status][travis-badge]][travis-badge-url]
[![Ember Observer Score][ember-observer-badge]][ember-observer-url]

## Compatibility

- Ember.js v3.12 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Installation

```shell
ember install ember-palette
```

## Usage

```hbs
<ColorPalette
  @selected={{this.color}}
  @onselect={{fn (mut this.color)}}
/>
```

## API

- `selected` - CSS color string, hex is using default colors e.g. '#333333'.
- `onselect` - Action that receives the selected color string.
- `colors` - Array of color strings, overrides the default hex strings array.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## Attribution

Default colors taken from [materialpalette.com][colors].

[npm-badge-img]: https://badge.fury.io/js/ember-palette.svg
[npm-badge-link]: http://badge.fury.io/js/ember-palette
[travis-badge]: https://travis-ci.org/knownasilya/ember-palette.svg
[travis-badge-url]: https://travis-ci.org/knownasilya/ember-palette
[ember-observer-badge]: http://emberobserver.com/badges/ember-palette.svg
[ember-observer-url]: http://emberobserver.com/addons/ember-palette
[colors]: http://materialpalette.com
