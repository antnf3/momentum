(() => {
  const weatherCity = document.querySelector(".weather-div span:first-child");
  const weatherIcon = document.querySelector(".weather-icon");

  function geoSuccess(position) {
    const API_KEY = "bb2e7b1915621c57331bcfb02a1c8929";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        weatherCity.innerText = data.name;
        weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherIcon.alt = data.weather[0].main;
      });
  }

  function geoError(err) {
    alert(err.message);
  }

  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
})();
