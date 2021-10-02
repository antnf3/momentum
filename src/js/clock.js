(() => {
  const clockTitle = document.querySelector(".clock");

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");
    return {
      year,
      month,
      date,
      hours,
      minutes,
      seconds,
    };
  }

  function paintDday() {
    const { hours, minutes, seconds } = getCurrentDate();
    clockTitle.innerHTML = `${hours}:${minutes}:${seconds}`;
  }

  paintDday();
  setInterval(paintDday, 1000);
})();
