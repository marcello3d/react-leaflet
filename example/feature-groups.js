import React, { Component } from 'react';
import {
  Circle,
  CircleMarker,
  Map,
  Polyline,
  Popup,
  FeatureGroup,
  TileLayer
} from 'react-leaflet';

export default class FeatureGroupsExample extends Component {
  render() {
    const center = [51.505, -0.09];

    const polyline = [
      [51.505, -0.09],
      [51.51, -0.1],
      [51.51, -0.12]
    ];

    return <Map center={center} zoom={13}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <FeatureGroup layers={[
          <Circle center={center} radius={200} fillColor='blue' />,
          <CircleMarker center={[51.51, -0.12]} radius={20} color='red'>
            <Popup>
              <span>Popup in CircleMarker</span>
            </Popup>
          </CircleMarker>,
          <Polyline positions={polyline} color='lime' />
      ]}/>
    </Map>;
  }
}
