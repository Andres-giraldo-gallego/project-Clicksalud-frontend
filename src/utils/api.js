function GetWeatherData() {
  navigator.geolocation.getCurrentPosition((pos) => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=' +
        pos.coords.latitude +
        '&longitude=' +
        pos.coords.longitude +
        '&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m'
    )
      .then((res) => res.json())

      .then((res) => {
        console.log(res);
      });
  });
}
export default GetWeatherData;
