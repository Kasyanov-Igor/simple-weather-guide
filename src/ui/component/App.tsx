import React, { useState, useEffect } from 'react';
import {CurrentWeather} from './Current-weather';
import {WeatherService} from '../../infrastruction/services/weather-service';
import { Weather } from '../../domain/models/weather';

export const App: React.FunctionComponent = () => {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);

    const fetchData = async () => {
      let weatherService = new WeatherService();
        const data = await weatherService.GetWeatherFromAPI();
        setWeatherData(data);
        console.log(data);
    };

    useEffect(() => {
      fetchData();
  });
  
  return (weatherData ? <CurrentWeather weather={weatherData} /> : null )
};