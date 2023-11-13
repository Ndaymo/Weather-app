window.addEventListener('load', ()=> {
    let long;
    let lat;
    let name;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
long = position.coords.longitude;
lat = position.coords.latitude;
name = position.coords.name;

const apiWindow = `https://geocoding-api.open-meteo.com/v1/search?name=Gent&count=10&language=en&format=json`

fetch(apiWindow)
.then(response =>response.json())
.then (data => {
    //console.log(data);
});



        });



    } else //We are doing this incase it doesn't work on user side
    {
        h1.textContent = "Oops, looks like you don't have location turned on"
    }
});

const apiKey="65cc8878c68a497129c9e7134dbe309c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bujumbura";

async function checkWeather() {
const response = await fetch(apiUrl + `apiKey`);
}



fetch(`https://geocoding-api.open-meteo.com/v1/search?name=ghent&count=1&language=en&format=json`)
.then(response => response.json())
.then (data => {
    console.log( "longitude is " + long + " and latitude is " + lat + " that's " + name);
    console.log(data);

})