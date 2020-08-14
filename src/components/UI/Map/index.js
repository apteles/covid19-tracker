import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { Container } from "./styles";

function Map({ children, coords }) {
  //coords: { lat: 34.80746, lng: -40.4796 }

  return (
    <Container>
      <LeafletMap center={coords} zoom={3}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {children}
      </LeafletMap>
    </Container>
  );
}

export default React.memo(Map);
