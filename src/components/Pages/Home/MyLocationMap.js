import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 25.04534,
  lng: 89.218423,
};

function MyLocationMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyATfJtnVOCzuVtUCkA2hJeamCADNdO80uY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <>
          <p> Our Location</p>{" "}
        </>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyLocationMap);
