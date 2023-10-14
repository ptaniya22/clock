let secondArrow = document.querySelector('.s'),
  minuteArrow = document.querySelector('.m'),
  hourArrow = document.querySelector('.h'),
  hourBox = document.querySelector('.hours'),
  minuteBox = document.querySelector('.minutes');

function clock() {
  let time = new Date();
  let hours = time.getHours() * 30;
  let minutes = time.getMinutes() * 6;
  let seconds = time.getSeconds() * 6;

  secondArrow.style = `transform: rotate(${seconds}deg)`;
  minuteArrow.style = `transform: rotate(${minutes}deg)`;
  hourArrow.style = `transform: rotate(${hours}deg)`;

  hourBox.innerHTML =
    time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
  minuteBox.innerHTML =
    time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

  setTimeout(() => clock(), 1000);
}

clock();

let links = document.querySelectorAll('.tabsItem');
let tabs = document.querySelectorAll('.tabsContentItem');

links.forEach((link, i) => {
  link.addEventListener('click', () => {
    removeActive();
    link.classList.add('active');
    tabs[i].classList.add('active');
  });
});

function removeActive() {
  links.forEach((link, i) => {
    link.classList.remove('active');
    tabs[i].classList.remove('active');
  });
}

let timerSecond = document.querySelector('.stopwatch__seconds'),
  timerMinute = document.querySelector('.stopwatch__minutes'),
  timerHour = document.querySelector('.stopwatch__hours');

// function timer() {
//   timerSecond = i % 60;
//   timerMinute = Math.trunc(timerSecond);
//   timerHour = Math.trunc(timerMinute);
//   i++;
//   console.log(timerSecond);
//   setTimeout(() => timer(), 1000);
// }
let i = 0;
let statusBtn = 'start';
// (btnText = document.querySelector('.stopwatch__btn')),
el = document.querySelector('.stopwatch__btn');
console.log(el);
el.addEventListener('click', () => {
  let span = document.querySelector('.tabsLink__span');

  switch (statusBtn) {
    case 'start':
      statusBtn = 'stop';
      span.classList.add('active');
      el.innerHTML = 'STOP';
      timer();
      break;
    case 'stop':
      statusBtn = 'clear';
      span.classList.remove('active');
      span.classList.add('active_clear');
      el.innerHTML = 'CLEAR';

      break;
    case 'clear':
      statusBtn = 'start';
      span.classList.remove('active_clear');
      el.innerHTML = 'START';
      i = 0;
      timerSecond.innerHTML = 0;
      timerHour.innerHTML = 0;
      timerMinute.innerHTML = 0;
      break;
  }
});

function timer() {
  i++;
  timerSecond.innerHTML = i % 60;
  timerHour.innerHTML = Math.trunc(i / 3600);
  timerMinute.innerHTML = Math.trunc((i % 3600) / 60);

  console.log(timerSecond);
  statusBtn != 'clear' ? setTimeout(() => timer(), 1000) : '';
  // if (statusBtn != 'clear') {
  //   setTimeout(() => timer(), 1000);
  // }
}
