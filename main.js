window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
long = position.coords.longitude;
lat = position.coords.latitude;
const proxy = 'https://cors-anywhere.herokuapp.com/';
const api = `https://api.open-meteo.com/v1/forecast?${lat}&${long}
&hourly=temperature_2m,precipitation_probability,precipitation`

fetch(api)
.then(response => {
    return response.json();
     
})
.then (response => {
    console.log(data);
});



        });



    } else //We are doing this incase it doesn't work on user side
    {
        h1.textContent = "Oops, looks like you don't have location turned on"
    }
});