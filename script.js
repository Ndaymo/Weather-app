// const searchbtn = document.querySelector(".search-btn");

// searchbtn.addEventListener("click", async (event) => {
//   event.preventDefault();

// const searchInput = document.querySelector(".search-input");

// console.log(searchInput.value + "What the user wrote");

//   const locationApi = `https://geocoding-api.open-meteo.com/v1/search?name=${searchInput.value}&count=1&language=en&format=json`;

//   const locationResponse = await fetch(locationApi);
//   const locationData = await locationResponse.json();
//   console.log(locationData.results[0].country);

//   let lat = locationData.results[0].latitude;
//   let long = locationData.results[0].longitude;

//   //const weatherApi = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,apparent_temperature,is_day,precipitation,rain,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,weather_code,cloud_cover,visibility,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,wind_gusts_10m&daily=weather_code,uv_index_max,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max`;
//   const weatherApiTwwo = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,weather_code,pressure_msl,visibility,wind_speed_10m,wind_direction_10m,temperature_80m,temperature_120m,temperature_180m&daily=weather_code,temperature_2m_max,precipitation_sum,rain_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max&forecast_days=16`
//   const weatherResponse = await fetch(weatherApiTwwo);
//   const weatherData = await weatherResponse.json();

//   console.log(weatherData);
//   console.log(weatherData.daily.time[5]);
//   console.log(weatherData.daily.weather_code[1]);

// });

const WMO_CODES = {
  0: {
    day: {
      description: "Sunny",
      image: "http://openweathermap.org/img/wn/01d@2x.png",
    },
    night: {
      description: "Clear",
      image: "http://openweathermap.org/img/wn/01n@2x.png",
    },
  },
  1: {
    day: {
      description: "Mainly Sunny",
      image: "http://openweathermap.org/img/wn/01d@2x.png",
    },
    night: {
      description: "Mainly Clear",
      image: "http://openweathermap.org/img/wn/01n@2x.png",
    },
  },
  2: {
    day: {
      description: "Partly Cloudy",
      image: "http://openweathermap.org/img/wn/02d@2x.png",
    },
    night: {
      description: "Partly Cloudy",
      image: "http://openweathermap.org/img/wn/02n@2x.png",
    },
  },
  3: {
    day: {
      description: "Cloudy",
      image: "http://openweathermap.org/img/wn/03d@2x.png",
    },
    night: {
      description: "Cloudy",
      image: "http://openweathermap.org/img/wn/03n@2x.png",
    },
  },
  45: {
    day: {
      description: "Foggy",
      image: "http://openweathermap.org/img/wn/50d@2x.png",
    },
    night: {
      description: "Foggy",
      image: "http://openweathermap.org/img/wn/50n@2x.png",
    },
  },
  48: {
    day: {
      description: "Rime Fog",
      image: "http://openweathermap.org/img/wn/50d@2x.png",
    },
    night: {
      description: "Rime Fog",
      image: "http://openweathermap.org/img/wn/50n@2x.png",
    },
  },
  51: {
    day: {
      description: "Light Drizzle",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Light Drizzle",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  53: {
    day: {
      description: "Drizzle",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Drizzle",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  55: {
    day: {
      description: "Heavy Drizzle",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Heavy Drizzle",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  56: {
    day: {
      description: "Light Freezing Drizzle",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Light Freezing Drizzle",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  57: {
    day: {
      description: "Freezing Drizzle",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Freezing Drizzle",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  61: {
    day: {
      description: "Light Rain",
      image: "http://openweathermap.org/img/wn/10d@2x.png",
    },
    night: {
      description: "Light Rain",
      image: "http://openweathermap.org/img/wn/10n@2x.png",
    },
  },
  63: {
    day: {
      description: "Rain",
      image: "http://openweathermap.org/img/wn/10d@2x.png",
    },
    night: {
      description: "Rain",
      image: "http://openweathermap.org/img/wn/10n@2x.png",
    },
  },
  65: {
    day: {
      description: "Heavy Rain",
      image: "http://openweathermap.org/img/wn/10d@2x.png",
    },
    night: {
      description: "Heavy Rain",
      image: "http://openweathermap.org/img/wn/10n@2x.png",
    },
  },
  66: {
    day: {
      description: "Light Freezing Rain",
      image: "http://openweathermap.org/img/wn/10d@2x.png",
    },
    night: {
      description: "Light Freezing Rain",
      image: "http://openweathermap.org/img/wn/10n@2x.png",
    },
  },
  67: {
    day: {
      description: "Freezing Rain",
      image: "http://openweathermap.org/img/wn/10d@2x.png",
    },
    night: {
      description: "Freezing Rain",
      image: "http://openweathermap.org/img/wn/10n@2x.png",
    },
  },
  71: {
    day: {
      description: "Light Snow",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Light Snow",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  73: {
    day: {
      description: "Snow",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Snow",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  75: {
    day: {
      description: "Heavy Snow",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Heavy Snow",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  77: {
    day: {
      description: "Snow Grains",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Snow Grains",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  80: {
    day: {
      description: "Light Showers",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Light Showers",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  81: {
    day: {
      description: "Showers",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Showers",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  82: {
    day: {
      description: "Heavy Showers",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Heavy Showers",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  85: {
    day: {
      description: "Light Snow Showers",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Light Snow Showers",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  86: {
    day: {
      description: "Snow Showers",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Snow Showers",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  95: {
    day: {
      description: "Thunderstorm",
      image: "http://openweathermap.org/img/wn/11d@2x.png",
    },
    night: {
      description: "Thunderstorm",
      image: "http://openweathermap.org/img/wn/11n@2x.png",
    },
  },
  96: {
    day: {
      description: "Light Thunderstorms With Hail",
      image: "http://openweathermap.org/img/wn/11d@2x.png",
    },
    night: {
      description: "Light Thunderstorms With Hail",
      image: "http://openweathermap.org/img/wn/11n@2x.png",
    },
  },
  99: {
    day: {
      description: "Thunderstorm With Hail",
      image: "http://openweathermap.org/img/wn/11d@2x.png",
    },
    night: {
      description: "Thunderstorm With Hail",
      image: "http://openweathermap.org/img/wn/11n@2x.png",
    },
  },
};

const searchbtn = document.querySelector(".search-btn");
const container = document.querySelector(".container");

searchbtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const searchInput = document.querySelector(".search-input");
  const cityName = searchInput.value;

  try {
    const geoData = await getGeoData(cityName);
    const weatherData = await getWeatherData(
      geoData.latitude,
      geoData.longitude
    );

    container.innerHTML = ""; // Clear existing cards
    for (let i = 0; i < 6; i++) {
      createWeatherCard(weatherData, i);
    }
  } catch (error) {
    console.error(error);
    alert("There was an error fetching weather data. Please try again later.");
  }
});

async function getGeoData(cityName) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`
  );
  const data = await response.json();

  if (data.results.length === 0) {
    return { error: "City not found" };
  }

  return {
    latitude: data.results[0].latitude,
    longitude: data.results[0].longitude,
  };
}

async function getWeatherData(latitude, longitude) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,weather_code,pressure_msl,visibility,wind_speed_10m,wind_direction_10m,temperature_80m,temperature_120m,temperature_180m&daily=weather_code,temperature_2m_max,precipitation_sum,rain_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max&forecast_days=16`
  );
  const data = await response.json();
  console.log(data);
  return data;
}

function createWeatherCard(weatherData, i) {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const searchInput = document.querySelector(".search-input");
  const cityName = searchInput.value;

  const card = document.createElement("div");
  card.classList.add("card");

  if (i === 0) {
    card.classList.add("today");
    card.classList.remove("card");

    const hourlyWeather = document.createElement("ul");
    hourlyWeather.classList.add('hourlyUnorderedList');

    const listItem1 = document.createElement("li");
    listItem1.textContent = `${weatherData.hourly.time[i]} m/s`;
    hourlyWeather.appendChild(listItem1);

    const listItem2 = document.createElement("li");
    listItem2.textContent = `Rain: ${weatherData.hourly.rain[i]}`;
    hourlyWeather.appendChild(listItem2);

    const listItem3 = document.createElement("li");
    listItem3.textContent = `Time: ${weatherData.hourly.temperature_2m[i]}`;
    hourlyWeather.appendChild(listItem3);

    card.appendChild(hourlyWeather);
  }

  const date = new Date();
  const heading = document.createElement("h3");
  heading.textContent = daysOfTheWeek[(date.getDay() + i) % 7];
  if (i == 0) heading.textContent = "Today";
  card.appendChild(heading);

  WMO_CODES["name"];
  const image = document.createElement("img");
  image.src = WMO_CODES[weatherData.daily.weather_code[i]].day.image;

  card.appendChild(image);

  const temperature = document.createElement("span");
  temperature.textContent = `${weatherData.daily.temperature_2m_max[i]}°C`;
  temperature.classList.add("temperatureClass");
  card.appendChild(temperature);

  const windIcon = document.createElement("img");
  windIcon.src = "./Assets/wind.png";
  windIcon.classList.add("windICon");
  card.appendChild(windIcon);

  const wind = document.createElement("span");
  wind.textContent = ` ${weatherData.daily.wind_speed_10m_max[i]}%`;
  card.appendChild(wind);

  container.appendChild(card);
}
