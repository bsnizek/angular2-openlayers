import { Component, OnInit, Input } from '@angular/core';
import { layer, style, StyleFunction } from 'openlayers';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';

@Component({
  selector: 'aol-layer-vectortile',
  template: `<ng-content></ng-content>`
})
export class LayerVectorTileComponent extends LayerComponent implements OnInit {

  @Input() renderBuffer: number;
  @Input() renderMode: layer.VectorTileRenderType|string;
  /* not marked as optional in the typings */
  @Input() renderOrder: (feature1: ol.Feature, feature2: ol.Feature) => number;
  @Input() style: (style.Style | style.Style[] | StyleFunction);
  @Input() updateWhileAnimating: boolean;
  @Input() updateWhileInteracting: boolean;
  @Input() visible: boolean;

  constructor(map: MapComponent) {
    super(map);
  }

  ngOnInit() {
    // console.log('creating ol.layer.VectorTile instance with:', this);
    this.instance = new layer.VectorTile(this);
    super.ngOnInit();
  }
}
