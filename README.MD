﻿# angular2-openlayers

## Installation

To install this library, run:

```bash
npm install angular2-openlayers --save
```

## Example

Here is a "minimal" map example that fetches tiles from OpenStreetMap and center the map in Meylan (France):

```html
<aol-map [width]="'500px'" [height]="'300'">
    <aol-view [zoom]="2">
        <aol-coordinate [x]="5.795122" [y]="45.210225" [srid]="'EPSG:4326'"></aol-coordinate>
    </aol-view>
    <aol-layer-tile>
        <aol-source-osm></aol-source-osm>
    </aol-layer-tile>
</aol-map>
```

## Documentation

The API is documented in `documentation/`

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
npm run ngc
```

To lint all `*.ts` files:

```bash
npm run lint
```

Live example (reload on code changes):

```bash
npm install -g @angular/cli
cd example
npm install
ng serve
```

Live example will be viewable at locahost:4200

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request and enjoy! :D

## License

MPL-2.0 © [Quentin Lampin](quentin.lampin@orange.com)
