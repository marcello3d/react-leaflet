import React from 'react';

import SimpleExample from './simple';
import EventsExample from './events';
import VectorLayersExample from './vector-layers';
import FeatureGroupsExample from './feature-groups';

const examples = <div>
  <h1>React-Leaflet examples</h1>
  <h2>Popup with Marker</h2>
  <SimpleExample />
  <h2>Events</h2>
  <p>Click the map to show a marker at your detected location</p>
  <EventsExample />
  <h2>Vector layers</h2>
  <VectorLayersExample />
  <h2>FeatureGroup Example</h2>
  <FeatureGroupsExample />
</div>;

React.render(examples, document.getElementById('app'));
