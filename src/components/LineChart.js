import React, { Component } from 'react';
var Chart = require('chart.js');

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    const {time_arr , lay_length , line_speed} = this.props;
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
              distribution: 'linear',
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
              ticks: { min: 0, max: 100 }
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
                min: 10
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
          backgroundColor: "red",
          pointRadius: 1,
          borderColor: "red",
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