import "./App.css";
import rain from "./assets/rain.gif";
import wind from "./assets/wind.gif";
import sun from "./assets/sun.gif";
import cloud from "./assets/clouds.gif";
import Card from "./components/card";

function App() {
  var weather = [
    {
      temp: "28°C",
      target: "rain",
      weather: "Rainy",
      video: rain,
      location: "Mumbai, India",
    },
    {
      temp: "40°C",
      target: "sunny",
      weather: "Sunny",
      video: sun,
      location: "Cape Town, SA",
    },
    {
      temp: "30°C",
      target: "cloudy",
      weather: "Cloudy",
      video: cloud,
      location: "New York, USA",
    },
    {
      temp: "28°C",
      target: "windy",
      weather: "Windy",
      video: wind,
      location: "Jaipur, India",
    },
  ];
  return (
    <div className="h-[100vh] bg-cyan-100">
      <h1 className="text-center text-4xl text-semibold py-4">
        Dynamic Weather App Cards
      </h1>
      <div className="flex flex-row justify-between content-center">
        {weather.map((atm) => {
          return <Card props={atm} />;
        })}
      </div>
      <div className="footer text-3xl">Created with ♡ by Prachet Shah</div>
    </div>
  );
}

export default App;
