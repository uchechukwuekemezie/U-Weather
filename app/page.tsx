"use client";
import React, { useState } from "react";
import Input from "./component/input";
import Current from "./component/current";
import WeekForecast from "./component/WeekForecast";
import WeatherDetails from "./component/WeatherDetails";

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=45b44e51fb6445ff88f235516233008&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found. Enter a valid city.");
        setData({});
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div>
        <h2>Welcome to U-Weather!</h2>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div>
        <p>City not found!</p>
        <p>Please enter a valid city.</p>
      </div>
    );
  } else {
    content = (
      <>
        <div>
          <Current data={data} />
          <WeekForecast />
        </div>
        <div>
          <WeatherDetails />
        </div>
      </>
    );
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-screen">
      <div className="bg-white/25 w-full flex flex-col h-fit">
        {/* input and logo */}
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 font-bold">U-WEATHER</h1>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Home;
