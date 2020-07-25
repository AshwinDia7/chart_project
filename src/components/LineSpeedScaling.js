import React , {Component} from 'react';
import '../css/LengthScaling.css';

export default class LineSpeedScaling extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className = "length_container">
                <text className = "length_text">{'Line Speed Scaling'}</text>
                <div className = "btn_line1">
                    <button className = "le_sc_button">{'Auto Scale'}</button>
                    <button className = "le_sc_button">{'Expand'}</button>
                </div>
                <div className = "btn_line2">
                    <button className = "le_sc_button">{'Fixed'}</button>
                </div>
            </div>
        )
    }
}