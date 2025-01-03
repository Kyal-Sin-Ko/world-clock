// update time and date every 1s
setInterval(function () {
  // Set the date and time for Los Angeles
  let losAngelesDate = document.querySelector("#los-angeles .date");
  let losAngelesTime = document.querySelector("#los-angeles .time");
  let losAngelesTimeZone = moment.tz("America/Los_Angeles");

  losAngelesDate.innerHTML = losAngelesTimeZone.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = `${losAngelesTimeZone.format(
    "h:mm:ss"
  )} <span class=small>${losAngelesTimeZone.format("a")}</span>`;

  // set the date and time for Yangon
  let yangonDate = document.querySelector("#yangon .date");
  let yangonTime = document.querySelector("#yangon .time");
  let yangonTimeZone = moment.tz("Asia/Yangon");

  yangonDate.innerHTML = yangonTimeZone.format("MMMM Do YYYY");
  yangonTime.innerHTML = `${yangonTimeZone.format(
    "h:mm:ss"
  )} <span class=small>${yangonTimeZone.format("a")}</span>`;
}, 1000);
