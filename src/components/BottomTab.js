import React, {Component} from 'react';
import '../css/BottomTab.css';

export default class BottomTab extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className = "container">
                <div className = "btn_container2">
                    <button className = "button12">{'Trend'}</button>
                    <button className = "button12">{'Numeric'}</button>
                    <button className = "button12">{'Dial'}</button>
                </div>
                <div className = "btn_container2">
                    <button className = "button2">{'Change Reel'}</button>
                    <button className = "button2">{'Stop'}</button>
                    <button className = "button2">{'Start'}</button>
                </div>
            </div>

        )
    }
}