import React from 'react';
import './App.css';

import {getData} from './utils/data_generator';
import LineChart from './components/LineChart';
import Header from './components/Header';
import Header2 from './components/Header2';
import BottomTab from './components/BottomTab';
import RightBar from './components/RightBar';
import Status from './components/Status';
import PlotEnables from './components/PlotEnables';
import LengthScaling from './components/LengthScaling';
import LineSpeedScaling from './components/LineSpeedScaling';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data : getData()
    }
  }
  componentDidMount(){
    window.setInterval(() => {
      this.setState({
        data : getData()
      })
    }, 5000)
  }
  render(){
    return (
      <div className ="App">
        <Header />
          <div className = "container">
            <div className = "app_container1">
              <Header2 />
              <div className = "main-chart-wrapper">
                <LineChart data = {this.state.data[0].data}
                        title = {this.state.data[0].title}
                        color = "blue" />
              </div>
              <div className = "bottom_tab">
                <BottomTab />
              </div>  
            </div>
            <div className="app_container2">
              <div className = "right_bar">
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
