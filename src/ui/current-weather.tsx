import React from 'react';
import { Weather } from '../domain/models/weather'

function CurrentWeather(weather: any) {
  
  let date = Date.now();

  return (
    <div className='bg-light'>
      <div className="row">
        <div className='col-md-6'>
          <h4 className='m-3' style={{color: 'lightseagreen'}}><b>CURRENT WEATHER</b></h4>
          </div>
        <div className='col-md-6 d-flex justify-content-end'>
        <h4 className='m-3' style={{color: 'lightseagreen'}}><b>{date}</b></h4>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-4 text-center">

          <p>{weather.weatherConditions}</p>
        </div>
        <div className="col-md-4 text-center">
          <h4><b>{weather.temperatureCelsius}</b></h4>
        </div>
        <div className="col-md-4 text-center">
          <p>Sunrise: {weather.sunrise}</p>
          <p>Sunset: {weather.sunset}</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather;