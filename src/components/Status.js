import React , {Component} from 'react';
import {FontAwesome} from 'react-web-vector-icons';

import '../css/Status.css';

export default class Status extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className = "status_container">
                <text className = "status_heading">{'Status'}</text>
                <div className = "status_body">
                    <FontAwesome name = "check" color = "green" size = {30} />
                    <text className = "status_text">{'Materials Present'}</text>
                </div>
                <div className = "status_body">
                    <FontAwesome name = "check" color = "green" size = {30} />
                    <text className = "status_text">{'Valid'}</text>
                </div>
                <div className = "status_body">
                    <FontAwesome name = "check" color = "green" size = {30} />
                    <text className = "status_text">{'System Ready'}</text>
                </div>
            </div>
        )
    }
}