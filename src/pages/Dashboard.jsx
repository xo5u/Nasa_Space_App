import React, { useState } from "react";
import AirQualityMap from "../components/headers/AirQualityMap";
import { useAirQuality } from "../hooks/useAirQuality";
import CountrySearch from "../components/ui/CountrySearch";

export default function Dashboard() {
  const [selectedCity, setSelectedCity] = useState({
    name: "New York, USA",
    lat: 40.7128,
    lon: -74.006,
  });
  const [countryInfo, setCountryInfo] = useState(null);

  const { data, loading, error } = useAirQuality(
    selectedCity.lat,
    selectedCity.lon
  );

  return (
    <div className="flex justify-center items-start w-screen h-screen p-5 gap-5 ">
      {/* Left Section */}
      <div className="h-full flex-1 w-1/3 flex flex-col rounded-2xl bg-blue-dark/35 p-5 overflow-y-auto shadow-lg">
        {/* Search Bar */}
        <div className="w-full mb-5">
          <CountrySearch
            onSelect={async (city) => {
              setSelectedCity(city);

              // Fetch country info from REST Countries API
              try {
                const res = await fetch(
                  `https://restcountries.com/v3.1/name/${city.name
                    .split(",")[0]
                    .trim()}?fullText=true`
                );
                const info = await res.json();
                setCountryInfo(info[0] || null);
              } catch (err) {
                console.error("Country info fetch error:", err);
                setCountryInfo(null);
              }
            }}
          />
        </div>

        {/* Weather & Air Stats */}
        {data && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">Temperature</p>
              <h2 className="text-3xl font-bold text-purple-700 mt-2">
                {data[0]?.temprature ?? "--"} °C
              </h2>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">Air Quality Index (AQI)</p>
              <h2 className="text-3xl font-bold text-green-600 mt-2">
                {data[0]?.aqi ?? "--"}
              </h2>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">Wind Speed</p>
              <h2 className="text-3xl font-bold text-blue-600 mt-2">
                {data[0]?.windspeed ?? "--"} km/h
              </h2>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">Weather Condition</p>
              <h2 className="text-3xl font-bold text-red-500 mt-2">
                {data[0]?.assistant ?? "--"}
              </h2>
            </div>
          </div>
        )}

        {/* Country Info */}
        {countryInfo && (
          <div className="text-white p-5 rounded-lg shadow-md space-y-2">
            <h2 className="font-bold text-xl">{countryInfo.name.common}</h2>
            {countryInfo.flags?.png && (
              <img
                src={countryInfo.flags.png}
                alt={`${countryInfo.name.common} flag`}
                className="mt-2 w-24 h-auto rounded shadow"
              />
            )}
            <p>
              <strong>Official Name:</strong>{" "}
              {countryInfo.name.official ?? "--"}
            </p>
            <p>
              <strong>Capital:</strong> {countryInfo.capital?.[0] ?? "--"}
            </p>
            <p>
              <strong>Region:</strong> {countryInfo.region ?? "--"}
            </p>
            <p>
              <strong>Subregion:</strong> {countryInfo.subregion ?? "--"}
            </p>
            <p>
              <strong>Population:</strong>{" "}
              {countryInfo.population?.toLocaleString() ?? "--"}
            </p>
            <p>
              <strong>Area:</strong> {countryInfo.area?.toLocaleString() ?? "--"} km²
            </p>
            <p>
              <strong>Currencies:</strong>{" "}
              {countryInfo.currencies
                ? Object.values(countryInfo.currencies)
                    .map((c) => c.name)
                    .join(", ")
                : "--"}
            </p>
            <p>
              <strong>Languages:</strong>{" "}
              {countryInfo.languages
                ? Object.values(countryInfo.languages).join(", ")
                : "--"}
            </p>
           
          </div>
        )}
      </div>

      {/* Right Section: Map */}
      <div className="p-5 w-2/3 h-full flex flex-col">
        <h1 className="text-2xl font-bold capitalize mb-3">
          NASA Weather Dashboard
        </h1>
        {loading && <p>Loading data...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && <AirQualityMap data={data} flyToSelected={selectedCity} />}
      </div>
    </div>
  );
}
