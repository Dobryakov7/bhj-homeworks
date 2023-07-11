const timer = document.getElementById('timer');


const changeTimer = (time) => {
  const addZero = (n) => n < 10 ? '0' + n : n;
  const days = addZero(Math.floor(time / 60 / 60 / 24));
  const hours = addZero(Math.floor(time / 60 / 60 % 24));
  const minutes = addZero(Math.floor(time / 60 % 60));
  const seconds = addZero(time % 60);

  if (time <= 0) {
    timer.innerHTML = `${hours}:${minutes}:${seconds}`;
  } else {
    timer.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  }
}


const startTimer = () => {
    let time = +timer.textContent;
    changeTimer(time);
      let timerId = setTimeout(count = () => {
      if (time === 0) {
        clearInterval(timerId);
        let exit = confirm('Вы победили в конкурсе');
            } else {
        time -= 1;
        changeTimer(time);
        timerId = setTimeout(count, 1000);
      }
    }, 1000);
  };

startTimer();