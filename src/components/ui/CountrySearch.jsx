import React, { useState } from "react";

export default function CountrySearch({ onSelect }) {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?country=${query}&format=json&limit=1`
      );
      const data = await res.json();

      if (data.length > 0) {
        const { lat, lon, display_name } = data[0];
        onSelect({ name: display_name, lat: parseFloat(lat), lon: parseFloat(lon) });
      } else {
        alert("Country not found!");
      }
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search country..."
        className="w-full border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
      />
      <button
        type="submit"
        className="absolute top-3 right-4 text-teal-500 hover:text-teal-700"
      >
        🔍
      </button>
    </form>
  );
}
