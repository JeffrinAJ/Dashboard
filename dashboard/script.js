var xValues = [2016,2017,2018,2019,2020,2021,2022,2023];
var yValues = [15,14,29,24,21,30,56,60];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 10, max:75}}],
    }
  }
});


var aValues = [2016,2017,2018,2019,2020,2021,2022,2023];
var bValues = [15,14,29,24,21,30,56,60];
var barColors = ["red", "green","blue","orange","brown","pink","violet","white"];

new Chart("myChart1", {
  type: "bar",
  data: {
    labels: aValues,
    datasets: [{
      backgroundColor: barColors,
      data: bValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Vintage Cars Total Sales"
    }
  }
});