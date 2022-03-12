let now = new Date();
let h3 = document.querySelector("h3");

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
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
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

h3.innerHTML = `${day} ${hours}:${minutes} `;

function displayCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city");

  let h4 = document.querySelector("h4");
  h4.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("#type-city");
form.addEventListener("submit", displayCity);

//convert temperature from Celsius to farenheit
function changeToFarenheit(event) {
  event.preventDefault();
  let degree = document.querySelector("#degrees");
  let conversion = degree.innerHTML;

  degree.innerHTML = Math.round((conversion * 9) / 5 + 32);
  degree = Number;
}

let farenheit = document.querySelector("#farenheit");
farenheit.addEventListener("click", changeToFarenheit);
