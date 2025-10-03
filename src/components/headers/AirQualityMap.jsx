// src/AirQualityMap.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getColor } from "../../utils/getColors";
import "leaflet-extra-markers";
import "leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css";

function AirQualityMap({ data }) {
  if (!data || data.length === 0) return <p>No air quality data available.</p>;

  const center = [data[0].lat, data[0].lon];

  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {data.map((item, idx) => {
        const customIcon = L.ExtraMarkers.icon({
          icon: "fa-number",
          number: item.pm25, // يعرض الرقم داخل الأيقونة
          markerColor: getColor(item.pm25), // لون ديناميكي حسب pm2.5
          shape: "circle", // ممكن تغيّر لـ square أو star
          prefix: "fa",
        });

        return (
          <Marker
            key={idx}
            position={[item.lat, item.lon]}
            icon={customIcon}
          >
            <Popup>
              <strong>{item.location}</strong>
              <br />
              PM2.5: {item.pm25} µg/m³
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default AirQualityMap;
