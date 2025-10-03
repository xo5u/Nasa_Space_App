import React from 'react'
import MapGeneral from '../components/headers/AirQualityMap'
import AirQualityMap from '../components/headers/AirQualityMap'
import { useAirQuality } from '../hooks/useAirQuality'
function Home() {
    const { aqData, loading, error } = useAirQuality();

    if (loading) return <p>Loading air quality data...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;
  
    return (
        <>
        <h1>Air Quality Map (PM2.5)</h1>
        <AirQualityMap data={aqData} />
     <div>Home</div>
    <MapGeneral />

    </>
   
  )
}

export default Home