var xValues = ["Work", "Coding", "Church", "Other", "School","Art"];
var yValues = [70, 63, 13, 35,  14, 21];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145",
  "#007fff"
];

new Chart("daily", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Active Hours"
    }
  }
});

var xValues = ["Work", "Coding", "Church", "other", "School","Art"];
var yValues = [70, 63, 13, 35,  14, 21];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145",
  "#007fff"
];

new Chart("active", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Most active activity throughout the week"
    }
  }
});
var xValues = ["Hours", "coding", "tech Hardware", "Software"];
var yValues = [65, 10, 40, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145",
  "#007fff"
];

new Chart("overview", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Mini work summary"
    }
  }
});

var xValues = ["Work", "Coding", "Church", "Other", "School","Art"];
var yValues = [70, 63, 13, 35,  14, 21];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145",
  "#007fff"
];

new Chart("next", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Active Hours"
    }
  }
});

var xValues = ["Work", "Coding", "Church", "other", "School","Art"];
var yValues = [70, 63, 13, 35,  14, 21];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145",
  "#007fff"
];

new Chart("live", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Most active activity throughout the week"
    }
  }
});
var xValues = ["Hours", "coding", "tech Hardware", "Software"];
var yValues = [65, 10, 40, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145",
  "#007fff"
];

new Chart("down", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Mini work summary"
    }
  }
});
const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");
const menu = document.getElementById("menu");

btnOpen.addEventListener("click", (e) => {
  menu.classList.replace("hidden", "flex");
  btnOpen.classList.replace("block", "hidden");
  btnClose.classList.replace("hidden", "block");
});

btnClose.addEventListener("click", (e) => {
  menu.classList.replace("flex", "hidden");
  btnClose.classList.replace("block", "hidden");
  btnOpen.classList.replace("hidden", "block");
});

