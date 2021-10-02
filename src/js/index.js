const clockTitle = document.querySelector(".js-clock");

const CHRISTMAS_DAY = "2021-12-25 12:00:00";

function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate()).padStart(2, "0");
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");
  const seconds = String(today.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
}

function getDateDiff() {
  const daySeconds = 24 * 60 * 60 * 1000;
  const diffDay = new Date(CHRISTMAS_DAY) - new Date(getCurrentDate());
  const days = Math.floor(diffDay / daySeconds);
  const hours = Math.floor((diffDay % daySeconds) / (1000 * 60 * 60));
  const minutes = Math.floor((diffDay % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffDay % (1000 * 60)) / 1000);
  return {
    days,
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

function paintDday() {
  const { days, hours, minutes, seconds } = getDateDiff();
  clockTitle.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

paintDday();
setInterval(paintDday, 1000);
