function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form");
  let city = document.querySelector("#current-city");
  city.innerHTML = searchInput.value;

  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);

  apiKey = "144016bb2ce3odff4b8e4583ca9a5c1t";
  apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
  city.innerHTML = city;
}

function showTemperature(response) {
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = `${temperature}`;
  let temperature = Math.round(response.data.current.temperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours} :${minutes}`;
}

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();
