var socket = io();

var chartData = [
    [10, 20, 30, 40],
    [10, 30, 20, 40],
    [40, 20, 30, 10],
    [20, 10, 30, 40],
    [10, 20, 40, 30],
    [10, 20, 30, 40],
    [10, 20, 30, 40],
    [10, 20, 30, 40],
    [10, 20, 30, 40],
    [10, 20, 30, 40]
];

var charts = [
    {
        el: $("#cat1"),
        data: chartData[0]
    },
    {
        el: $("#cat2"),
        data: chartData[1]
    },
    {
        el: $("#cat3"),
        data: chartData[2]
    },
    {
        el: $("#cat4"),
        data: chartData[3]
    },
    {
        el: $("#cat5"),
        data: chartData[4]
    },
    {
        el: $("#cat6"),
        data: chartData[5]
    },
    {
        el: $("#cat7"),
        data: chartData[6]
    },
    {
        el: $("#cat8"),
        data: chartData[7]
    },
    {
        el: $("#cat9"),
        data: chartData[8]
    },
    {
        el: $("#cat10"),
        data: chartData[9]
    }
];

var pieCharts = charts.map(function (e) {
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
            }]
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
        items:1,
        loop: true,
        autoplay:true
    });
});