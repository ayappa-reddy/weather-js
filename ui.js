class UI {
  constructor() {
    this.container = document.querySelector(".container");
    this.location = document.querySelector(".w-location");
    this.desc = document.querySelector(".w-desc");
    this.temp = document.querySelector(".w-temp");
    this.icon = document.querySelector(".w-icon");
    this.humidity = document.querySelector(".w-humidity");
    this.dewpoint = document.querySelector(".w-dewpoint");
    this.feelslike = document.querySelector(".w-feelslike");
    this.wind = document.querySelector(".w-wind");
  }

  paint(data) {
    const {
      observation_location,
      weather,
      temperature_string,
      icon_url,
      relative_humidity,
      dewpoint_string,
      feelslike_string,
      wind_string
    } = data;

    this.location.textContent = observation_location.full;
    this.desc.textContent = weather;
    this.temp.textContent = temperature_string;
    this.icon.setAttribute("src", icon_url);

    this.humidity.textContent = `Relative Humidity: ${relative_humidity}`;
    this.dewpoint.textContent = `Dewpoint: ${dewpoint_string}`;
    this.feelslike.textContent = `Feels Like: ${feelslike_string}`;
    this.wind.textContent = `Wind: ${wind_string}`;
  }

  showAlert(msg) {
    if (!document.querySelector(".error")) {
      const errorDiv = document.createElement("div");
      errorDiv.className = "error";
      errorDiv.appendChild(document.createTextNode(msg));

      this.container.insertBefore(errorDiv, this.location);

      setTimeout(() => {
        document.querySelector(".error").remove();
      }, 2000);
    }
  }
}
