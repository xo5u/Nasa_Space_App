import React, { useState } from "react";
import AirQualityMap from "../components/headers/AirQualityMap";
import CityList from "../components/ui/CityList";
import { useAirQuality } from "../hooks/useAirQuality";
import { useWeatherRecommendation } from "../hooks/useWeatherRecommendation";
import MainHeader from "../components/headers/MainHeader";



export default function Home() {
 
  return (
    <>
    <MainHeader/>
    </>
  );
}
