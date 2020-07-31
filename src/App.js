import React from 'react';
import './App.css';
import axios from 'axios';

//import {getAPIData}  from './utils/api';
import LineChart from './components/LineChart';
import Header from './components/Header';
import Header2 from './components/Header2';
import BottomTab from './components/BottomTab';
import RightBar from './components/RightBar';
import Status from './components/Status';
import PlotEnables from './components/PlotEnables';
import LengthScaling from './components/LengthScaling';
import LineSpeedScaling from './components/LineSpeedScaling';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lay_len_arr : [],
      line_sp_arr : [],
      time_arr : [],
      temp : '00000000'
    }
  }
   getData = () => {
    var  var_temp = this.state.temp;
    var lay_length_arr = [];
    var line_speed_arr = [];
    var time_arr = [];
    var temp_ms = Date.now();
   let dayMs = 10;
   axios.get("http://localhost/web/meas/trend00000000,".concat(var_temp))
   .then(res_json => {
   //.then(res_json => {
       for (var dataobj of res_json.data){
        //   console.log(dataobj);
           lay_length_arr.push(dataobj['Len']/1000);
           line_speed_arr.push(dataobj['Vel']/1000);
       }
     for (var i=0; i<lay_length_arr.length; i++){
         var new_date_ms = new Date(temp_ms + i*dayMs);
         time_arr.push(new_date_ms)
     }
     var last_obj = res_json.data[res_json.data.length -1];
     var time_l_str = last_obj.TimeL
     this.setState({
       lay_len_arr : lay_length_arr,
       line_sp_arr : line_speed_arr,
       time_arr : time_arr,
       temp : time_l_str
     })
 })
  }
   async componentDidMount(){
    window.setInterval(() => {
      this.getData()
    }, 1000)
}
  render() {
    const {line_sp_arr , lay_len_arr , time_arr} = this.state;
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="app_container1">
            <Header2 />
            <div className="main-chart-wrapper">
              <LineChart time_arr={time_arr}
                lay_length = {lay_len_arr}
                line_speed = {line_sp_arr}
                color="blue" />
            </div>
            <div className="bottom_tab">
              <BottomTab />
            </div>
          </div>
          <div className="app_container2">
            <div className="right_bar">
              <RightBar />
              <Status />
              <PlotEnables />
              <LengthScaling />
              <LineSpeedScaling />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
