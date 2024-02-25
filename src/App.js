
import React, { useState } from "react";
import "./styles.css"; // Import the CSS file

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=71608e0a648a39cf75dc17a35c06881d`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      alert('Error in API call');
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={fetchData}>Fetch</button>
      {weatherData && (
        <div className="weather-info">
          <h2>Weather in {city}</h2>
          <p>Temperature: {weatherData.main.temp}</p>
          {/* Add more weather details here */}
        </div>
      )}
    </div>
  );
};

export default App;
