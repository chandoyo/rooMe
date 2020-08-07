import React, {Component} from 'react';

import { Button,Navbar,Jumbotron } from 'react-bootstrap';
import './css/landing.css';
import "bootstrap/dist/css/bootstrap.min.css"

export default class LandingPage extends Component{
    render(){
        return(
        <div id="landing-page">
            <header>

            </header>
                

            <div className="container">
                <Jumbotron id="landing-text">
                    <div id="welcome">
                        <h1>Welcome!</h1>
                        <p>
                        rooMe is a website that assists UCSD students in finding compatible roommates.
                        </p>
                        <p>
                            <Button id="dark-custom-btn" bsStyle="light">Join</Button>{' '}
                            <Button id="light-custom-btn" bsStyle="light">Log in</Button>{' '}

                        </p>
                    </div>
                </Jumbotron>
            </div>
        </div>
        );
    }
}
