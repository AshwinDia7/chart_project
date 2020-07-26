import React, {Component} from 'react';
var Chart = require('chart.js');

export default class LineChart extends Component{
  constructor(props){
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidUpdate(){
    this.myChart.data.labels = this.props.data.map(d => d.time);
    this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
    this.myChart.update();
  }
  componentDidMount(){
    this.myChart = new Chart(this.canvasRef.current, {
      type : 'line',
      options : {
        maintainAspectRatio : false,
        scales : {
          xAxes : [
            {
              scaleLabel : {
                display : true,
                labelString : "Time",
                fontColor : 'black',
                fontSize : 15
              },
              type : 'time',
              time : { unit : 'week'}
            }
          ],
          yAxes : [
            {
              id : 'A',
              type : 'linear',
              position : 'left',
              scaleLabel : {
                display : true,
                labelString : "LayLength (mm)",
                fontColor : "black",
                fontSize : 15
              },
              ticks : { min : 0}
            },
            {
              id : 'B',
              type : 'linear',
              position : 'right',
              scaleLabel : {
                display : true,
                labelString : "Line Speed (m/sec)",
                fontColor : "black",
                fontSize : 15
              },
              ticks : {
                min : 10
              }
            }
          ]
        }
      },
      data : {
        labels : this.props.data.map(d => d.time),
        datasets : [{
          label : "Laylength",
          yAxisID : 'A',
          data : this.props.data.map(d => d.value),
          fill : 'none',
          backgroundColor : this.props.color,
          pointRadius : 1,
          borderColor : this.props.color,
          borderWidth : 1,
          lineTension : 0
        },
        {
          label : "Line-Speed",
          yAxisID : 'B',
          data : this.props.data.map(d => d.value + 10),
          fill : 'none',
          backgroundColor : "red",
          pointRadius : 1,
          borderColor : "red",
          borderWidth : 1,
          lineTension : 0
        }  
      ]
      }
    })
  }
  render(){
    return <canvas ref={this.canvasRef} />
  }
}