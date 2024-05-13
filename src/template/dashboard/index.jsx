import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';


export default function DashboardTemplates(props) {
  const {
    handleApiLoaded,
    AnyReactComponent
  } = props;

  const [defaultProps, ] = useState({
    center: {
        lat: 16.463713,
        lng: 107.590866,
      },
      zoom: 11,
})
  return (
  // Important! Always set the container height explicitly
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBKhPV1r6BbCxwOQV2PAxhmy0u4G2-lhYQ' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
    >
      <AnyReactComponent lat={16.47553128402345} lng={107.55938016862828} text="My Home" />
    </GoogleMapReact>
  </div>
);
}

DashboardTemplates.propTypes = {
  handleApiLoaded: PropTypes.func,
  AnyReactComponent: PropTypes.element
}
