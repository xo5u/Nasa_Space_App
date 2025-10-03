// src/components/CityList.js
import React from "react";

function CityList({ cities, onSelect }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      {cities.map((city, idx) => (
        <button
          key={idx}
          style={{ marginRight: "5px", padding: "5px 10px" }}
          onClick={() => onSelect(city)}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
}

export default CityList;
