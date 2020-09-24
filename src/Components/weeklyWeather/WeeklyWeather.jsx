import React, { useContext } from "react";
import { WeatherContext, WeatherConsumer} from '../../Context/WeatherContext';
import DailyWeather from "./DailyWeather";
import '../../styles/weeklyWeather.scss';

const WeeklyWeather = () => {
  const appContext = useContext(WeatherContext);
    const state = appContext;
  return (
    <WeatherConsumer>
      {(value) => {
        const lists = state.state.forecast.list;
        console.log("list",lists);
        let detail;
        if(lists){
          detail = lists.map((list,index) => (
            index % 8 === 0 && (
            <DailyWeather  key={list.index} details={list}/>
          )
          ))
        }
        console.log(detail);
        return (
          <>
          <div className="weekly">{detail}</div>
          </>
        );
      }}
    </WeatherConsumer>
  );
};

export default WeeklyWeather;
