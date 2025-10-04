import { useState, useEffect } from "react";

export const useWeatherRecommendation = (airData) => {
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY;

  useEffect(() => {
    if (!airData) return;

    const fetchRecommendation = async () => {
      setLoading(true);
      setError(null);
      const model = "mistralai/Mistral-7B-Instruct-v0.2";

      try {
        const response = await fetch(
          `https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              inputs: `Analyze the following air and weather data and give health recommendations for today: ${JSON.stringify(
                airData
              )}`,
            }),
          }
        );

        const data = await response.json();
        console.log(data); 
        setRecommendation(data[0]?.generated_text || "No recommendation available");
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendation();
  }, [airData, apiKey]);

  return { recommendation, loading, error };
};
