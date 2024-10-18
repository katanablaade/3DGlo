const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const total = document.getElementById('total');

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcTypeValue && calcSquareValue) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    animationTotal(totalValue);
  };

  const animationTotal = (targetValue) => {
    let prevValue = +total.textContent;
    let result = prevValue;

    const changeNumber =
      prevValue < targetValue
        ? Math.floor((targetValue - prevValue) / 17)
        : Math.floor((prevValue - targetValue) / 17);

    const intervalId = setInterval(() => {
      if (prevValue < targetValue) {
        result = result + changeNumber;
        if (result < targetValue) {
          total.textContent = result;
        } else {
          total.textContent = targetValue;
          clearInterval(intervalId);
        }
      } else {
        result = result - changeNumber;
        if (result > targetValue) {
          total.textContent = result;
        } else {
          total.textContent = targetValue;
          clearInterval(intervalId);
        }
      }
    }, 50);
  };

  calcBlock.addEventListener('input', (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      countCalc();
    }
  });
};
export default calc;
