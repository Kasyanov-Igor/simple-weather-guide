import React from 'react';
import CurrentWeather from './ui/current-weather'
import {WeatherService} from './infrastruction/services/weather-service'

const GetData = async () => {
  let weatherService = new WeatherService();
  let weatherData = await weatherService.GetWeatherFromAPI();
  return weatherData;
}
  
export const App: React.FunctionComponent = () => (
  <>
      <p className='text-center'>data</p>
      <CurrentWeather weather={GetData()} />
  </>
);
