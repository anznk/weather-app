import React, { useState, useEffect, useReducer} from "react";

const WeatherContext = React.createContext();
const apiId = process.env.REACT_APP_APIID;
const api = process.env.REACT_APP_API;

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        current: action.payload.current,
        forecast: action.payload.forecast
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something went wrong!",
        current: {},
        forecast: {}
      };
    default:
      return state;
  }
};
const WeatherProvider = (props) => {　
  const [units, setUnits] = useState("imperial");
  const [search, setSearch] = useState("Vancouver");
  const [timezone, setTimezone] = useState("");
  const initialState = {
    loading: true,
    error: "",
    current: {},
    forecast: {}
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchWeather = async () => {
    try {
      const CurrentData = await fetch(`${api}weather?q=${search}&units=${units}&APPID=${apiId}`);
			const DailyData = await fetch(`${api}forecast?q=${search}&units=${units}&APPID=${apiId}`);
      const weatherData = await CurrentData.json();
			const weatherForecast = await DailyData.json();
			dispatch({
				type: "FETCH_SUCCESS",
				payload: {
					current: weatherData,
					forecast: weatherForecast
				}
			});
      setTimezone(weatherData.timezone);
    } catch (e) {
      if (e) {
        console.log(e.message, "Failed to fetch");
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchWeather();
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchWeather();
  }, );
	
  return (
    <WeatherContext.Provider
      value={{
        search,
        units,
        handleSearchChange,
        handleSubmit,
        handleUnitChange,				
        state,
        timezone
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
const WeatherConsumer = WeatherContext.Consumer;
export { WeatherProvider, WeatherConsumer, WeatherContext };
