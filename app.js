const storage = new Storage();
const ui = new UI();

const { city, state } = storage.getLocation();
const weather = new Weather(city, state);

document.addEventListener("DOMContentLoaded", getWeather);

document.querySelector(".submit-btn").addEventListener("click", changeLocation);

function changeLocation(e) {
  const city = document.querySelector(".city").value;
  const state = document.querySelector(".state").value;

  weather.changeLocation(city, state);

  storage.setLocation(city, state);

  getWeather();

  document.querySelector(".city").value = "";
  document.querySelector(".state").value = "";

  this.setAttribute("href", "#");
}

function getWeather() {
  const weatherData = weather.getWeather();

  weatherData
    .then(data => {
      ui.paint(data);
    })
    .catch(err => {
      ui.showAlert("OOPS!! Something went wrong. Please check your inputs");
      console.log(err);
    });
}
