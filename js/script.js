let balance = document.getElementById("balance").getContext("2d");

// Chart.defaults.global.defaultFontFamily = "Rubik";
// Chart.defaults.global.defaultFontSize = 16;
// Chart.defaults.global.defaultFontWeight = 500;
// Chart.defaults.global.defaultFontColor = "#D8E3E9";
// Chart.defaults.elements.point = 90;
// Chart.defaults.plugins.title = "testing";
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "from $",
      data: [12, 33, 8, 3, 55, 20, 25, 27, 18, 40, 38, 45],
      backgroundColor: "#D8E3E9",
      borderRadius: 9,
      hoverBackgroundColor: "#00BD9D",
    },
  ],
};
//tooltipLine
const tooltipLine = {
  id: "tooltipLine",
  beforeDraw: (chart) => {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const ctx = chart.ctx;
      ctx.save();
      const activePoint = chart.tooltip._active[0];
      ctx.beginPath();
      ctx.setLineDash([2, 5]);
      ctx.moveTo(activePoint.element.x, chart.chartArea.top);
      ctx.lineTo(activePoint.element.x, activePoint.element.y);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#00BD9D"; // "#D8E3E9"
      ctx.stroke();
      ctx.restore();
    }
  },
};
const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        display: false,
      },
      x: {
        grid: {
          drawBorder: false,
          drawOnChartArea: false,
          display: false,
          lineWidth: 5,
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
  plugins: [tooltipLine],
};

const myChart = new Chart(balance, config);

// MOBILE NAVIGATION

const MobileNavBtnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".left-header");
MobileNavBtnEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

////////////////////////////////////////////////////////////////
//Sticky navigation

const transfersEl = document.querySelector(".transfers");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    !ent.isIntersecting
      ? document.querySelector(".main").classList.add("sticky")
      : document.querySelector(".main").classList.remove("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(transfersEl);
