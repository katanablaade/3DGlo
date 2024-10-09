const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    // let days = Math.floor(timeRemaining / 60 / 60);
    let hours = Math.floor(timeRemaining / 60 / 60)
      .toString()
      .padStart(2, '0');
    let minutes = Math.floor((timeRemaining / 60) % 60)
      .toString()
      .padStart(2, '0');
    let seconds = Math.floor(timeRemaining % 60)
      .toString()
      .padStart(2, '0');

    return { timeRemaining, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    if (getTime.timeRemaining < 0) {
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    } else {
      timerHours.textContent = getTime.hours;
      timerMinutes.textContent = getTime.minutes;
      timerSeconds.textContent = getTime.seconds;
    }
  };
  setInterval(updateClock, 1000);
};

export default timer;