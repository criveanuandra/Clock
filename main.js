setInterval(() => {
  const date = new Date();

  const hoursElement = document.getElementById("hours");
  const hours = date.getHours();

  const minutesElement = document.getElementById("minutes");
  const minutes = date.getMinutes();

  const secondsElement = document.getElementById("seconds");
  const seconds = date.getSeconds();

  hoursElement.innerHTML = hours < 10 ? `0${hours}:` : `${hours}:`;
  minutesElement.innerHTML = minutes < 10 ? `0${minutes}:` : `${minutes}:`;
  secondsElement.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  const dateElement = document.getElementById("date");
  
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const month = months[date.getMonth()];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const day = days[date.getDay()];

  dateElement.innerHTML = `${day}, ${month}`;
});
