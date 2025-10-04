import React, { useState } from "react";
import AirQualityMap from "../components/headers/AirQualityMap";
import CityList from "../components/ui/CityList";
import { useAirQuality } from "../hooks/useAirQuality";
import { useWeatherRecommendation } from "../hooks/useWeatherRecommendation";

const cities = [
  { name: "New York, USA", lat: 40.7128, lon: -74.0060 },
  { name: "Toronto, Canada", lat: 43.65107, lon: -79.347015 },
  { name: "Los Angeles, USA", lat: 34.0522, lon: -118.2437 },
];

export default function Home() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const { data, loading, error } = useAirQuality(selectedCity.lat, selectedCity.lon);

  const { recommendation, loading: recLoading, error: recError } = useWeatherRecommendation(
    data?.[0]
  );

  return (
    <div>
      <h1 className="text-2xl font-bold">welcome to Nasa dashbaord map </h1>
      {/* <CityList cities={cities} onSelect={setSelectedCity} /> */}
      <div className="flex gap-3">
      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="flex-10">
      {data && <AirQualityMap data={data} />}
      </div>
      {/* <div style={{ marginTop: "20px" }}>
        {recLoading && <p>Generating recommendation...</p>}
        {recError && <p>Error: {recError.message}</p>}
        {recommendation && (
          <div className="p-4 border rounded">
            <h2 className="font-bold mb-2">Today's Weather Recommendation:</h2>
            <p>{recommendation}</p>
          </div>
        )}
      </div> */}
      </div>
    </div>
  );
}
