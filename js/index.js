const data = {
  "1": [10, 20, 30, 40],
  "2": [10, 20, 30, 40],
  "3": [10, 30, 20, 40],
  "4": [40, 20, 30, 10],
  "5": [20, 10, 30, 40],
  "6": [10, 20, 40, 30],
  "7": [10, 20, 30, 40],
  "8": [10, 20, 30, 40],
  "9": [10, 20, 30, 40],
  "10": [10, 20, 30, 40]
};

// const socket = io();

const chartData = {
  chart: Object.keys(data).map((key) => {
    return {
      key: key,
      data: data[key]
    }
  })
};


const owlCarouselTemplate = $("#owl-carousel-template").html();
const compiledTemplate = Handlebars.compile(owlCarouselTemplate);
const generatedHTML = compiledTemplate(chartData);
$("#owl-carousel-container").html(generatedHTML);

const charts = chartData.chart.map((data, index) => {
  return {
    el: $("#cat" + index),
    data: data.data
  }
});

const pieCharts = charts.map(function (e) {
  return new Chart(e.el, {
    type: 'doughnut',
    data: {
      datasets: [{
        label: "# of votes",
        data: e.data,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ]
      }],
      labels: [
        "participant1",
        "participant2",
        "participant3",
        "participant4",
      ]
    },
    options: {
      responsive: true,
      responsiveAnimationDuration: 200,
      maintainAspectRatio: true,
      animation: {
        animateRotate: true
      }
    }
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true
  });
});
