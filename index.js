const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const startBtnRef = document.querySelector('[ data-action="start"]');
const stopBtnRef = document.querySelector('[ data-action="stop"]');
const bodyRef = document.querySelector("body");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startRandomColor = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const randomColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
      bodyRef.style.backgroundColor = randomColor;
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
  },
};

startBtnRef.addEventListener(
  "click",
  startRandomColor.start.bind(startRandomColor)
);
stopBtnRef.addEventListener(
  "click",
  startRandomColor.stop.bind(startRandomColor)
);
