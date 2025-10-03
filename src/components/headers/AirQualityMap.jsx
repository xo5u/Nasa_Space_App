import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getColor } from "../../utils/getColors";
import "leaflet-extra-markers";
import "leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css";
import { useAirQuality } from "../../hooks/useAirQuality";

// Component: FlyTo Marker
function FlyToMarker({ position }) {
  const map = useMap();
  React.useEffect(() => {
    if (position) map.flyTo(position, 12);
  }, [map, position]);
  return null;
}

// Component: Handle Map Clicks
function ClickHandler({ onClick }) {
  useMapEvents({
    click: (e) => {
      onClick([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

function AirQualityMap({ data }) {
  const [clickedPosition, setClickedPosition] = useState(null);
  const { aqData: clickedData } = useAirQuality(
    clickedPosition?.[0],
    clickedPosition?.[1]
  );

  if (!data || data.length === 0) return <p>No air quality data available.</p>;

  const center = [data[0].lat, data[0].lon];

  return (
    <MapContainer center={center} zoom={10} style={{ height: "600px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {data.map((item, idx) => {
        const customIcon = L.ExtraMarkers.icon({
          icon: "fa-number",
          number: item.pm25,
          markerColor: getColor(item.pm25),
          shape: "circle",
          prefix: "fa",
        });

        return (
          <Marker key={idx} position={[item.lat, item.lon]} icon={customIcon}>
            <Popup>
              <strong>{item.location}</strong>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {Object.entries(item).map(([key, value]) => {
                  if (["lat", "lon", "location"].includes(key)) return null;
                  return (
                    <li key={key} style={{ color: getColor(value), fontWeight: "bold" }}>
                      {key.toUpperCase()}: {value} µg/m³
                    </li>
                  );
                })}
              </ul>
            </Popup>
          </Marker>
        );
      })}

      {/* Marker for clicked location */}
      {clickedPosition && clickedData && clickedData.map((item, idx) => {
        const customIcon = L.ExtraMarkers.icon({
          icon: "fa-number",
          number: item.pm25,
          markerColor: getColor(item.pm25),
          shape: "circle",
          prefix: "fa",
        });
        return (
          <Marker key={`click-${idx}`} position={clickedPosition} icon={customIcon}>
            <Popup>
              <strong>{item.location}</strong>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {Object.entries(item).map(([key, value]) => {
                  if (["lat", "lon", "location"].includes(key)) return null;
                  return (
                    <li key={key} style={{ color: getColor(value), fontWeight: "bold" }}>
                      {key.toUpperCase()}: {value} µg/m³
                    </li>
                  );
                })}
              </ul>
            </Popup>
          </Marker>
        );
      })}

      {/* FlyTo the clicked location */}
      {clickedPosition && <FlyToMarker position={clickedPosition} />}

      {/* Handle map clicks */}
      <ClickHandler onClick={setClickedPosition} />
    </MapContainer>
  );
}

export default AirQualityMap;
