console.log("this works");


let btn = document.querySelector(".search-button");
let input = document.querySelector(".zipcode");

function getWeatherData(zip) {
    let API_ENDPOINT = `http://api.openweathermap.org/data/2.5/weather?zip=${ZIP_CODE}&APPID=${API_KEY}`
    let API_KEY = config.WEATHER_API_KEY;

  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      // store the data in a variable of our choosing
      let local_weather_data = data;
      // log the data to the browser console
      console.log(local_weather_data);
    });
}



function getZipCode(e) {
    e.preventDefault(); 
    let ZIP_CODE = input.value;
    getWeatherData(ZIP_CODE);

};

btn.addEventListener('click', getZipCode);


getWeatherData()