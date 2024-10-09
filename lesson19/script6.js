'use strict';

const myTimer = () => {
  const todayDate = new Date();
  const newYear = new Date(2025, 0, 1);
  const dateRemaining = newYear - todayDate;

  let greeting;
  const timesOfDay = todayDate.getHours();
  const day = todayDate.toLocaleString('ru-Ru', { weekday: 'long' });
  const time = todayDate.toLocaleTimeString('en');
  const daysUntilNewYear = Math.ceil(dateRemaining / (1000 * 60 * 60 * 24));

  if (timesOfDay >= 5) {
    greeting = `Доброе утро`;
  } else if (timesOfDay >= 12 && timesOfDay < 18) {
    greeting = `Добрый день`;
  } else if (timesOfDay >= 18 && timesOfDay < 24) {
    greeting = `Добрый вечер`;
  } else if (timesOfDay >= 0 && timesOfDay < 5) {
    greeting = `Доброй ночи`;
  }
  return { greeting, day, time, daysUntilNewYear };
};

const getTime = () => {
  let time = myTimer();
  let arr = [
    `${time.greeting}`,
    `Сегодня: ${time.day}`,
    `Текущее время: ${time.time}`,
    `До Нового года осталось: ${time.daysUntilNewYear} дня`,
  ];
  document.body.innerHTML = '';
  arr.forEach((item) => {
    const myDiv = document.createElement('div');
    myDiv.classList.add('time-div');
    document.body.append(myDiv);
    myDiv.textContent = item;
  });
};

setInterval(getTime, 1000);
getTime();
