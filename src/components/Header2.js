import React, {Component} from 'react';

import '../css/Headers2.css';

export default class Header2 extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className = "container1">
                <div className="line">
                    <text className = "heading_text">Line :</text>
                    <text className = "value_text">{' The Line'}</text>
                </div>
                <div className="reel_name">
                    <text className = "heading_text">Reel Name :</text>
                    <text className = "value_text">{' The Reel'}</text>
                </div>
                <div className="reel_num">
                    <text className = "heading_text">Reel# :</text>
                    <text className = "value_text">{' 1'}</text>
                </div>
                <div className="recipe">
                    <text className = "heading_text">Recipe :</text>
                    <text className = "value_text">{' The Recipe'}</text>
                </div>
                <div className="lot">
                    <text className = "heading_text">Lot ID :</text>
                    <text className = "value_text">{' The Lot'}</text>
                </div>
            </div>
        )
    }
}