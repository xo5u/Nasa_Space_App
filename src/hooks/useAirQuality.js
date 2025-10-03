// src/hooks/useAirQuality.js
import { useState, useEffect } from "react";

export const useAirQuality = (lat = 40.7128, lon = -74.0060) => {
  const [aqData, setAqData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  console.log(apiKey)
  console.log(import.meta.env.VITE_OPENWEATHER_API_KEY); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        console.log(data)
       
        const formatted = [
          {
            location: `Lat: ${lat}, Lon: ${lon}`,
            lat,
            lon,
            pm25: data.list[0].components.pm2_5,
          },
        ];

        setAqData(formatted);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lat, lon, apiKey]);

  return { aqData, loading, error };
};
