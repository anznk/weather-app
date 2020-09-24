import React, { useContext } from 'react'
import { WeatherContext} from '../../Context/WeatherContext';
import '../../styles/weeklyWeather.scss';

const DailyWeather = (props) => {
  const appContext = useContext(WeatherContext);
  const { timezone } = appContext;
  const dailyData = props.details;
  const ｗeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let setDate = new Date(dailyData.dt_txt);
  setDate.setHours(setDate.getHours() - 8);
  let dt = dailyData.dt;
  let dateOrg = dt * 1000 + timezone * 1000;
  let dateDT = new Date(dateOrg);
  let day = ｗeek[dateDT.getUTCDay()];
  let date = month[dateDT.getUTCMonth()] + dateDT.getUTCDate();
  console.log("data",dailyData);
  let dailyWeather;
  if (dailyData) {
    dailyWeather = <><p>{Math.round(dailyData.main.temp)}°F</p><p>Feels {Math.round(dailyData.main.feels_like)}°F</p></>
  }
  const weather = dailyData.weather;
  let icon, iconSrc;
  if(weather){
    icon = weather[0].icon;
    iconSrc = '/icons/'+ icon +'.svg';
  }
  return (
    <div className="box">
    {day && <p>{day}</p>}
    {date && <p>{date}</p>}
    <img src={iconSrc}  alt={icon} />
    <div> {dailyWeather} </div>
    </div>
  )
};

export default DailyWeather;