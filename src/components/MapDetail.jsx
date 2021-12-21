import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
const MapDetail = ({ userdetails }) => {
  const position = [
    userdetails.location.coordinates.latitude,
    userdetails.location.coordinates.longitude,
  ];

  const marker = new Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  });
  return (
    <MapContainer
      style={{ width: "100%", height: "400px" }}
      center={position}
      zoom={5}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={marker}>
        <Popup>{userdetails.name.first} lives here</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapDetail;
