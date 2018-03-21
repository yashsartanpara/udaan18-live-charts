const socket = io("udaan18-red-carpet.herokuapp.com/charts");
let data = {};
let chartData = {};
let charts = {};
let pieCharts = [];

let owlCarouselTemplate = $("#owl-carousel-template").html();
let compiledTemplate = Handlebars.compile(owlCarouselTemplate);

const setData = (votes) => {
  data = votes;

  chartData = {
    chart: Object.keys(data).map((key) => {
      return {
        key: key,
        data: data[key]
      }
    })
  };

  let generatedHTML = compiledTemplate(chartData);
  $("#owl-carousel-container").html(generatedHTML);

  charts = chartData.chart.map((data, index) => {
    return {
      el: $("#cat" + index),
      data: data.data
    }
  });

  pieCharts = charts.map(function (e) {
    console.log(e);
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

  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true
  });

  console.log(pieCharts);
};

socket.on('init', (votes) => {
  console.log(votes);
  setData(votes);
});

socket.on('vote', (votes) => {
  setData(votes);
});

$(document).ready(function () {


});