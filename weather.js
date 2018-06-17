class Weather {
  constructor(city, state) {
    this.apiKey = keys.apiKey;
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const response = await fetch(
      `http://api.wunderground.com/api/${this.apiKey}/conditions/q/${
        this.state
      }/${this.city}.json`
    );

    const responseData = await response.json();

    return responseData.current_observation;
  }

  changeLocation(newCity, newState) {
    this.city = newCity;
    this.state = newState;
  }
}
