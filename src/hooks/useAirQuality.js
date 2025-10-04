// src/hooks/useWeatherAirQuality.js
import { useState, useEffect } from "react";

export const useAirQuality = (lat, lon) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "6c913facf9a446b0aaf80d3a774901a1";

  useEffect(() => {
    if (!lat || !lon) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // 1️⃣ Air Pollution API
        const airRes = await fetch(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
        );
        const airData = airRes.ok ? await airRes.json() : null;

        // 2️⃣ One Call API
        const oneCallRes = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
        const oneCallData = oneCallRes.ok ? await oneCallRes.json() : null;

        // 3️⃣ Weather Assistant API
        const assistantRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
        const assistantData = assistantRes.ok ? await assistantRes.json() : null;

        // 4️⃣ TEMPO data
        let tempoData = null;
        try {
          const tempoRes = await fetch(
            `https://tempo.si.edu/api/satellite?lat=${lat}&lon=${lon}`
          );
          if (tempoRes.ok) tempoData = await tempoRes.json();
        } catch (e) {
          console.warn("TEMPO API failed", e);
        }

        // 5️⃣ Open-Meteo API (بدون API key)
        let openMeteoData = null;
        try {
          const openMeteoRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
          );
          if (openMeteoRes.ok) openMeteoData = await openMeteoRes.json();
          console.log(openMeteoData)
        } catch (e) {
          console.warn("Open-Meteo API failed", e);
        }

        // Combine all
        const formatted = [
          {
            location: `Lat: ${lat}, Lon: ${lon}`,
            lat,
            lon,
            aqi: airData?.list?.[0]?.main.aqi || null,
            pm25: airData?.list?.[0]?.components?.pm2_5 || null,
            co: airData?.list?.[0]?.components?.co || null,
            no2: airData?.list?.[0]?.components?.no2 || null,
            no: airData?.list?.[0]?.components?.no || null,
            o3: airData?.list?.[0]?.components?.o3 || null,
            so2: airData?.list?.[0]?.components?.so2 || null,
            pm10: airData?.list?.[0]?.components?.pm10 || null,
            nh3: airData?.list?.[0]?.components?.nh3 || null,
            // temp: oneCallData?.current?.temp || null,
            // humidity: oneCallData?.current?.humidity || null,
            // weather_main: oneCallData?.current?.weather?.[0]?.main || null,
            // weather_desc: oneCallData?.current?.weather?.[0]?.description || null,
            // wind_speed: oneCallData?.current?.wind_speed || null,
            assistant: assistantData?.weather?.[0]?.description || null,
            // tempo: tempoData || null,
            temprature: openMeteoData?.current_weather.temperature || null,
            windspeed: openMeteoData?.current_weather.windspeed || null,
            
          },
        ];

        setData(formatted);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lat, lon, apiKey]);

  return { data, loading, error };
};
