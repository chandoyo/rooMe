import React, {Component} from 'react';
// import Triton from './css/assets/triton.png';
import { Button,Navbar,Jumbotron,Image } from 'react-bootstrap';
import './css/landing.css';
import "bootstrap/dist/css/bootstrap.min.css"
import triton from './css/assets/triton-dark.png'; 

export default class LandingPage extends Component{
    render(){
        return(
        <div id="landing-page">
            
            <div id="wrap">   
                <div id="title">
                    rooMe 
                    
                    <Image id="triton-logo" src={triton} />
                </div>
                
            </div>
            
            <div className="container">
                <Jumbotron id="landing-text">
                    <div id="welcome">
                        <h1>Welcome!</h1>
                        <p>
                        rooMe is a website that assists UCSD students in finding compatible roommates.
                        </p>
                        <p>
                        
                            <Button id="test-custom-btn" variant="outline-light" href='/create-profile'>Join</Button>{' '}

                            <Button id="test-custom-btn" variant="outline-light">Log in</Button>{' '}

                        </p>
                    </div>
                </Jumbotron>
            </div>

            <div id="box"> 
                <div id="copyright"> 
                    © 2018 the Board of Regents of the University of California 
                </div>
            </div>

        </div>
        );
    }

}
