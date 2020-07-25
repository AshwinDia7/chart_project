import React, {Component} from 'react';
import '../css/RightBar.css';

export default class RightBar extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className = "button_container">
                <button className = "button">
                    <text className = "heading">{'Lay Length (mm)'}</text>
                    <text className = "value">{'9.984'}</text>
                </button>
                <button className = "button">
                    <text className = "heading">{'Line Speed (m/sec)'}</text>
                    <text className = "value">{'0.68'}</text>
                </button>
                <button className = "button">
                    <text className = "heading">{'Total Length (m)'}</text>
                    <text className = "value">{'27.57'}</text>
                </button>
                <button className = "button">
                    <text className = "heading">{'Twist Rate (tw/min)'}</text>
                    <text className = "value">{'3,809.00'}</text>
                </button>
            </div>
        )
    }
}