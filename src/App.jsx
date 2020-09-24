import React from 'react';
import './styles/App.scss';

import CurrentWeather from "./Components/CurrentWeather";
import WeeklyWeather from "./Components/weeklyWeather/WeeklyWeather";
import Header from "./Components/Header";
import { WeatherProvider } from "./Context/WeatherContext";
import 'font-awesome/css/font-awesome.min.css'; 

export default function App() {

  return (

    <WeatherProvider>
      <div className="App">
      <Header />
      <CurrentWeather />
      <WeeklyWeather />
    </div>
    </WeatherProvider>

  );
}

