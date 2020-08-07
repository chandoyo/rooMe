import React, {Component} from 'react';
import './css/home.css'
import {Card, Button} from 'react-bootstrap';

export default class UserHome extends Component{
    render(){
        return(
            <div id="home">
               <div class="container">
                    <div class="row">
                        <div class="col-sm">
                        One of three columns
                        </div>
                        <div class="col-sm">
                        One of three columns
                        </div>
                        <div class="col-sm">
                        One of three columns
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
