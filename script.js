const day = document.querySelector(".days-num");
const hour = document.querySelector(".hours-num");
const minute = document.querySelector(".minutes-num");
const second = document.querySelector(".seconds-num");
const celebration = document.querySelector(".newYearCelebration");

const newYear = "1 Jan 2024";
const countdown = () => {
  const newYearDate = new Date(newYear);
  const presentDate = new Date();

  newYearShow(presentDate, newYearDate);
  const currentDate = (newYearDate - presentDate) / 1000;
  const days = Math.floor(currentDate / (24 * 60 * 60));
  const hours = Math.floor((currentDate / (60 * 60)) % 24);
  const minutes = Math.floor(currentDate / 60) % 60;
  const seconds = Math.floor(currentDate % 60);

  // const days=Math.floor(currentDate/3600/24);
  // const hours=Math.floor(currentDate/3600)%24;
  // const minutes=Math.floor(currentDate/60)%60;
  // const seconds=Math.floor(currentDate%60);
  day.textContent = formatTime(days);
  hour.textContent = formatTime(hours);
  minute.textContent = formatTime(minutes);
  second.textContent = formatTime(seconds);
};
const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};
const newYearShow = (x, y) => {
  if (x.getTime() === y.getTime()) {
    celebration.innerHTML = "Happy New Year! Abdul Gaffar.";
  }
};
// initial Calling
countdown();
setInterval(countdown, 1000);

