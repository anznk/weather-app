import React from "react";
import { WeatherConsumer } from '../Context/WeatherContext';
import '../styles/currentWeather.scss';

const CurrentWeather = () => {
  return (
    <WeatherConsumer>
      {(value) => {
        const weather = value.state.current.weather;
        let icon, iconSrc, description;
        if(weather){
          icon = weather[0].icon;
          iconSrc = '/icons/'+ icon +'.svg';
          description = weather[0].main;
        }
        const name = value.state.current.name;
				const main = value.state.current.main;

        return (
          <div className="currentWeather">
						{name && <h3 classname="cityName">{name}</h3>}
            <div classname="clearfix">
              <div classname="inner clearfix">
                <img src={iconSrc}  alt={icon} />
              </div>
                {main && <p className="temp">{Math.round(main.temp)}°F</p>}
            </div>
            {main && <p>Feels like {Math.round(main.feels_like)}°F</p>}
            <p>{description}</p>

          </div>
        );
      }}
    </WeatherConsumer>
  );

};

export default CurrentWeather;
