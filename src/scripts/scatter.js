Chart.defaults.elements.point.backgroundColor = 'blue';
Chart.defaults.elements.point.radius = 8;

const scatterGraph = document.getElementById("scatterPlot");

const scatterData = {
    datasets: [{
        data: [{}],
        label: 'Declination & Right Ascension',
        backgroundColor: '#fa4334'
    }],
  };

const scatterOptions = {
    scales: {
        x: {
            type: 'linear',
            position: 'bottom',
            min: 0,
            max: 24,
            title: {
                display: true,
                align: 'end',
                text: 'Right Ascension (Hours)',
                color: 'white'
            },
            ticks: {
                color: 'white',
              },
              grid: {
                color: 'white',
              }
        },
        y: {
            type: 'linear',
            position: 'left',
            beginAtZero: false,
            min: -100,
            max: 100,
            title: {
                display: true,
                text: 'Declination',
                color: 'white'
            },
            ticks: {
                color: 'white',
              },
              grid: {
                color: 'white',
              }
        },
    },
    plugins: {
        legend: {
          display: false,
        }
      }
}


let scatterChart = new Chart(scatterGraph, {type: 'scatter', data: scatterData, options: scatterOptions})


const updateScatter = (data) => {
    scatterChart.data.datasets[0].data[0] = data;
    scatterChart.update();
}

