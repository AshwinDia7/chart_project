import React, { Component } from 'react';
var Chart = require('chart.js');

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.map(d => d.time);
    this.myChart.data.datasets[0].data = this.props.data.map(d => d.lay_length_value);
    this.myChart.data.datasets[1].data = this.props.data.map(d => d.line_speed_value);
    this.myChart.update();
  }
  componentDidMount() {
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
        labels: this.props.data.map(d => d.time),
        datasets: [{
          label: "Laylength",
          yAxisID: 'A',
          data: this.props.data.map(d => d.lay_length_value),
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
          data: this.props.data.map(d => d.line_speed_value),
          fill: 'none',
          backgroundColor: "red",
          pointRadius: 1,
          borderColor: "red",
          borderWidth: 1,
          lineTension: 0
        },
        {
          label: "Laylength-Threshold",
          yAxisID: 'A',
          data: this.props.data.map(d => 90),
          fill: 'none',
          backgroundColor: "darkblue",
          pointRadius: 0,
          borderColor: "darkblue",
          borderWidth: 1,
          lineTension: 0
        },
        {
          label: "Linespeed-Threshold",
          yAxisID: 'B',
          data: this.props.data.map(d => 95),
          fill: 'none',
          backgroundColor: "darkred",
          pointRadius: 0,
          borderColor: "darkred",
          borderWidth: 1,
          lineTension: 0
        },
        ]
      }
    })
  }
  render() {
    return <canvas ref={this.canvasRef} />
  }
}