// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
// AnyReactComponent.propTypes = {
//     text: PropTypes.string
// }

export default function StationPages() {
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
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
       {/* map data của api ra return <Marker lat={latitude} lng={longitude} /> */}
        {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  );

  
}
