// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const ddayContainer = document.querySelector(".js-clock");
const dDayTitle = ddayContainer.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const now = new Date();
  dday = xmasDay - now;

  const day = Math.floor(dday / (1000 * 60 * 60 * 24)),
    hours = Math.floor((dday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes = Math.floor((dday % (1000 * 60 * 60)) / (1000 * 60)),
    seconds = Math.floor((dday % (1000 * 60)) / 1000);

  dDayTitle.innerText = `${day}일 ${hours}시 ${minutes}분 ${seconds}초 남았습니다.`;
}

function init() {
  getTime();
}
init();
