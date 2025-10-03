import React from 'react'
import MapGeneral from '../components/headers/AirQualityMap'
import AirQualityMap from '../components/headers/AirQualityMap'
import { useAirQuality } from '../hooks/useAirQuality'
import { useState } from 'react'
import CityList from '../components/ui/CityList'
function Home() {
    const [selectedCity, setSelectedCity] = useState(null);

  // مثال: مدن ومواقعها
  const cities = [
    { name: "New Delhi, India", lat: 28.6139, lon: 77.209 },
    { name: "Beijing, China", lat: 39.9042, lon: 116.4074 },
    { name: "Los Angeles, USA", lat: 34.0522, lon: -118.2437 },
  ];

  const { aqData, loading, error } = useAirQuality(
    selectedCity?.lat,
    selectedCity?.lon
  );
    if (loading) return <p>Loading air quality data...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;
  
    return (
        <>
        <h1 className='text-2xl font-bold '>Air Quality Map</h1>
        <CityList cities={cities} onSelect={setSelectedCity} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <AirQualityMap data={aqData} flyToPosition={selectedCity && [selectedCity.lat, selectedCity.lon]} />
     <div>Home</div>
    <MapGeneral />

    </>
   
  )
}

export default Home