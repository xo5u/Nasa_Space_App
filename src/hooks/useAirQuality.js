import { useState, useEffect } from "react";

export const useAirQuality = (lat, lon) => {
  const [aqData, setAqData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    if (lat == null || lon == null) return; // لا نعمل fetch إذا لم تتوفر الإحداثيات
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();

        const formatted = [
          {
            location: `Lat: ${lat}, Lon: ${lon}`,
            lat,
            lon,
            pm25: data.list[0].components.pm2_5,
            co: data.list[0].components.co,
            no2: data.list[0].components.no2,
            no: data.list[0].components.no,
            o3: data.list[0].components.o3,
            so2: data.list[0].components.so2,
            pm10: data.list[0].components.pm10,
            nh3: data.list[0].components.nh3,
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
