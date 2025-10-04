import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css";
import "leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css";
import "leaflet-extra-markers";

import { getColor } from "../../utils/getColors";
import { useAirQuality } from "../../hooks/useAirQuality";

// Fly to marker
function FlyToMarker({ position }) {
  const map = useMap();
  React.useEffect(() => {
    if (position) map.flyTo(position, 12);
  }, [map, position]);
  return null;
}

// Handle map clicks
function ClickHandler({ onClick }) {
  useMapEvents({
    click(e) {
      onClick([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

export default function AirQualityMap({ data }) {
  const [clickedPosition, setClickedPosition] = useState(null);
  const { data: clickedData } = useAirQuality(
    clickedPosition?.[0],
    clickedPosition?.[1]
  );

  if (!data || data.length === 0) return <p>No air quality data available.</p>;

  const center = [data[0].lat, data[0].lon];

  const renderMarker = (item, position, keyPrefix = "") => {
    const customIcon = L.ExtraMarkers.icon({
      icon: "fa-number",
      number: item.pm25,
      markerColor: getColor(item.pm25),
      shape: "circle",
      prefix: "fa",
    });

    return (
      <Marker key={`${keyPrefix}-${item.lat}-${item.lon}`} position={position} icon={customIcon}>
        <Popup>
          <strong>{item.location}</strong>
          <ul>
            {Object.entries(item).map(([key, value]) => {
              if (["lat", "lon", "location"].includes(key)) return null;
              // Display TEMPO satellite image
             
              return (
                <li key={key} style={{ color: getColor(value), fontWeight: "bold" }}>
                  {key.toLowerCase()}: {value?.toString()} {key.includes("pm") ? "µg/m³" : ""}
                </li>
              );
            })}
          </ul>
        </Popup>
      </Marker>
    );
  };

  return (
    <MapContainer center={center} zoom={5} style={{ height: "600px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {data.map((item) => renderMarker(item, [item.lat, item.lon], "default"))}

      {clickedPosition && clickedData?.map((item) => renderMarker(item, clickedPosition, "click"))}

      {clickedPosition && <FlyToMarker position={clickedPosition} />}
      <ClickHandler onClick={setClickedPosition} />
    </MapContainer>
  );
}
