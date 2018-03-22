const socket = io("udaan18-red-carpet.herokuapp.com/charts");
let data = {};
let chartData = {};
let charts = {};
let pieCharts = [];

let owlCarouselTemplate = $("#owl-carousel-template").html();
let compiledTemplate = Handlebars.compile(owlCarouselTemplate);

const setData = (votes) => {
  chartData = {
    chart: votes
  };

  let generatedHTML = compiledTemplate(chartData);
  $("#owl-carousel-container").html(generatedHTML);

  charts = chartData.chart.map((data, index) => {
    return {
      el: $("#cat" + index),
      data: data.votes
    }
  });

  pieCharts = charts.map(function (e) {
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
    autoplay: false
  });

};

socket.on('init', (votes) => {
  console.log(votes);
  setData(votes);
});

socket.on('vote', (votes) => {
  updateData(pieCharts, votes);
});


const updateData = (pieCharts, votes) => {
  chartData = {
    chart: votes
  };

  charts = chartData.chart.map((data, index) => {
    return {
      el: $("#cat" + index),
      data: data.votes
    }
  });

  for(let i=0; i<pieCharts.length;i++){
    for(let j=0; j< pieCharts[i].data.datasets.length; j++){
      pieCharts[i].data.datasets[j].data = charts[j].data;
      console.log(pieCharts[i].data.datasets[j].data + "=" + charts[j].data)
    }
  }
};