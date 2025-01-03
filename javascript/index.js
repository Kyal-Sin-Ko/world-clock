// update time and date every 1s
setInterval(function () {
  // Set the date and time for Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDate = document.querySelector("#los-angeles .date");
    let losAngelesTime = document.querySelector("#los-angeles .time");
    let losAngelesTimeZone = moment.tz("America/Los_Angeles");

    losAngelesDate.innerHTML = losAngelesTimeZone.format("MMMM Do YYYY");
    losAngelesTime.innerHTML = `${losAngelesTimeZone.format(
      "h:mm:ss"
    )} <span class=small>${losAngelesTimeZone.format("a")}</span>`;
  }
  // set the date and time for Yangon

  let yangonElement = document.querySelector("#yangon");
  if (yangonElement) {
    let yangonDate = document.querySelector("#yangon .date");
    let yangonTime = document.querySelector("#yangon .time");
    let yangonTimeZone = moment.tz("Asia/Yangon");

    yangonDate.innerHTML = yangonTimeZone.format("MMMM Do YYYY");
    yangonTime.innerHTML = `${yangonTimeZone.format(
      "h:mm:ss"
    )} <span class=small>${yangonTimeZone.format("a")}</span>`;
  }
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  // split("/") - to split the string by "/"
  // .replace("_", " ") - to replace the underscore with a space
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format(
      "h:mm:ss"
    )} <span class="small">${cityTime.format("A")}</span></div>
  </div>
  `;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
