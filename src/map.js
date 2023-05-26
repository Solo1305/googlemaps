import React from 'react';

const Map = () => {
  return (
    <div style={{ height: '500px', width: '500px', margin: '0 auto' }}>
      {/* Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual Google Maps API key */}
      <iframe
        title="Google Maps"
        width="100%"
        height="100%"
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/view?key=&center=&zoom=15`}
        allowFullScreen
      />
    </div>
  );
};

export default Map;