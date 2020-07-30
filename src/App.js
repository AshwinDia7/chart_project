import React from 'react';
import './App.css';

import {getAPIData} from './utils/api';
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
      time_arr : []
    }
  }
   async componentDidMount(){
      var ash = await  getAPIData();
      console.log(ash)
      console.log("Now we are in App componenet");
      console.log('Lay length is ', ash.lay_length_arr);
      console.log('Line speed is', ash.line_speed_arr);
      console.log('Time arr is ', ash.time_arr);
      this.setState({
        lay_len_arr : ash.lay_length_arr,
        line_sp_arr : ash.line_speed_arr,
        time_arr : AudioScheduledSourceNode.time_arr
      })
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
