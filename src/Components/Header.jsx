import React, { useContext } from "react";
import { WeatherContext } from "../Context/WeatherContext";
import '../styles/header.scss';

const Header = () => {
  const appContext = useContext(WeatherContext);
  const { handleSubmit, handleSearchChange } = appContext;

  return (
    <div className="header">
			<div className="title">
			<h1>Weather Forecast</h1>
			</div>
			<div className="searchbox">
				<form onSubmit={(e) => handleSubmit(e)}>
					<input
						onChange={(e) => handleSearchChange(e)}
						type="text"
						className="search_container"
						id="search"
						placeholder="city name"
						name="search"
						autocomplete="off"
					/>
					<button type="submit" className="button">
						<i class="fa fa-search" aria-hidden="true"　/>
					</button>
				</form>
			</div>
			
    </div>
  );
};
export default Header;