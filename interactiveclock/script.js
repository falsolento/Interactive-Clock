const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function getTime() {
  const time = new Date();

  const getHoursRot = (360 / 12) * time.getHours();
  const getMinutesRot = (360 / 60) * time.getMinutes();
  const getSecondsRot = (360 / 60) * time.getSeconds();

  hours.style.transform = `rotate(${getHoursRot}deg)`;
  minutes.style.transform = `rotate(${getMinutesRot}deg)`;
  seconds.style.transform = `rotate(${getSecondsRot}deg)`;
}

setInterval(() => {
  getTime();
}, 1000);

getTime();