window.addEventListener('load', ()=> {
    let long;
    let lat;
    let name;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
long = position.coords.longitude;
lat = position.coords.latitude;
name = position.coords.name;

fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1&language=en&format=json`)
.then(response => response.json())
.then (data => {
    console.log( "longitude is " + long + " and latitude is " + lat + " that's " + name);
    console.log(data);

})

const proxy = "https://cors-anywhere.herokuapp.com/";
const api = `https://geocoding-api.open-meteo.com/v1/search?name=Gent&count=10&language=en&format=json`

fetch(api)
.then(response => {
    return response.json();
     
})
.then (response => {
    //console.log(data);
});



        });



    } else //We are doing this incase it doesn't work on user side
    {
        h1.textContent = "Oops, looks like you don't have location turned on"
    }
});