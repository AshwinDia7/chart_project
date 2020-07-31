import React, { Component } from 'react';
var Chart = require('chart.js');

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidUpdate(){
    const {time_arr, lay_length, line_speed} = this.props;
    console.log("This is the line cahrt",lay_length)
    this.myChart.data.datasets[0].data = lay_length;
    this.myChart.data.datasets[1].data = line_speed;
    this.myChart.data.labels = time_arr;
    this.myChart.data.datasets[2].data = lay_length.map(d => 10.3);
    this.myChart.data.datasets[3].data = lay_length.map(d => 8);
    this.myChart.data.datasets[4].data = lay_length.map(d => 10);
    this.myChart.data.datasets[5].data = lay_length.map(d => 9);
    this.myChart.update();
  }
  componentDidMount() {
    var {time_arr , lay_length , line_speed} = this.props;
    console.log('In linchart', lay_length)
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'line',
      options: {
        maintainAspectRatio: false,
        animation: { duration: 0 },
        hover: { animationDuration: 0 },
        responsiveAnimationDuration: 0,
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Time",
                fontColor: 'black',
                fontSize: 15
              },
              type: 'time',
              distribution: "series",
              time: {
                unit: 'second',
                displayFormats: {
                  second: 'HH:mm:ss'
                },
                stepSize: 1
              }
            }
          ],
          yAxes: [
            {
              id: 'A',
              type: 'linear',
              position: 'left',
              scaleLabel: {
                display: true,
                labelString: "LayLength (mm)",
                fontColor: "black",
                fontSize: 15
              },
              ticks: {  }
            },
            {
              id: 'B',
              type: 'linear',
              position: 'right',
              scaleLabel: {
                display: true,
                labelString: "Line Speed (m/sec)",
                fontColor: "black",
                fontSize: 15
              },
              ticks: {
                
              }
            }
          ]
        }
      },
      data: {
        labels: time_arr,
        datasets: [{
          label: "Laylength",
          yAxisID: 'A',
          data: lay_length,
          fill: 'none',
          backgroundColor: this.props.color,
          pointRadius: 1,
          borderColor: this.props.color,
          borderWidth: 1,
          lineTension: 0
        },
        {
          label: "Line-Speed",
          yAxisID: 'B',
          data: line_speed,
          fill: 'none',
          backgroundColor: "black",
          pointRadius: 1,
          borderColor: "black",
          borderWidth: 1,
          lineTension: 0
        },
        {
          label: "Laylength-Maximum-Alert-Threshold",
          yAxisID: 'A',
          data: lay_length.map(d => 10.3),
          fill: 'none',
          backgroundColor: "red",
          pointRadius: 0,
          borderColor: "red",
          borderWidth: 1,
          lineTension: 0
        },
        {
          label: "Laylength-Minimum-Alert-Threshold",
          yAxisID: 'A',
          data: lay_length.map(d => 8),
          fill: 'none',
          backgroundColor: "red",
          pointRadius: 0,
          borderColor: "red",
          borderWidth: 1,
          lineTension: 0
        },
        {
          label: "Laylength-Maximum-Alarm-Threshold",
          yAxisID: 'A',
          data: lay_length.map(d => 10),
          fill: 'none',
          backgroundColor: "yellow",
          pointRadius: 0,
          borderColor: "yellow",
          borderWidth: 1,
          lineTension: 0
        },
        {
          label: "Laylength-Minimum-Alarm-Threshold",
          yAxisID: 'A',
          data: lay_length.map(d => 9),
          fill: 'none',
          backgroundColor: "yellow",
          pointRadius: 0,
          borderColor: "yellow",
          borderWidth: 1,
          lineTension: 0
        }
        ]
      }
    })
  }
  render() {
    return <canvas ref={this.canvasRef} />
  }
}