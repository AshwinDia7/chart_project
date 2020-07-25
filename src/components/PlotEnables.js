import React , {Component} from 'react';
import '../css/PlotEnables.css';

export default class PlotEnables extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className = "chart_options_container">
                <text className = "chart_options_header">{'Chart Options'}</text>
                <div className = "plot_enables">
                    <text className = "pe_heading">{'Plot Enables'}</text>
                    <div className = "button_line1">
                        <button className = "ch_op_button">{'Lay length'}</button>
                        <button  className = "ch_op_button">{'Line Speed'}</button>
                    </div>
                    <div className = "button_line2">
                        <button className= "ch_op_button">{'Thresholds'}</button>
                        <button className = "ch_op_button">{'By reel Length'}</button>
                    </div>
                </div>
            </div>
        )
    }
}