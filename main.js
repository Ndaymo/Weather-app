// window.addEventListener('load', ()=> {
//     let long;
//     let lat;
//     let name;

//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(position => {
// long = position.coords.longitude;
// lat = position.coords.latitude;
// name = position.coords.name;

// const apiWindow = `https://geocoding-api.open-meteo.com/v1/search?name=Gent&count=10&language=en&format=json`

// fetch(apiWindow)
// .then(response =>response.json())
// .then (data => {
//     //console.log(data);
// });

//         });

//     } else //We are doing this incase it doesn't work on user side
//     {
//         h1.textContent = "Oops, looks like you don't have location turned on"
//     }
// });

const apiKey = "65cc8878c68a497129c9e7134dbe309c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  
  if (response.status === 404){
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = "none";
} else {

    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    // Add iamges for weather
     if (data.weather[0].main == "Clouds"){
      weatherIcon.src = "Assets/clouds.png";
     } else if (data.weather[0].main == "Clear"){
      weatherIcon.src = "Assets/clear.png"; 
     } else if (data.weather[0].main == "Drizzle"){
      weatherIcon.src = "Assets/drizzle.png"; 
     } else if (data.weather[0].main == "Mist"){
      weatherIcon.src = "Assets/mist.png"; 
     }
  document.querySelector('.weather').style.display = "block";
  document.querySelector('.error').style.display = 'none';

  }
  



}

searchButton.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})

checkWeather();
