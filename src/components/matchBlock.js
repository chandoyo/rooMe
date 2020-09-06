import React from 'react';
import ReactDOM from 'react-dom';
import pic from './css/assets/Iconblack.png';
import {Image, Button} from 'react-bootstrap';
import { setConfiguration, Row, Col, Container } from "react-grid-system";

class MatchBlock extends React.Component{
    render(){
        return (
            <div id="match-btn-group">
                 <div>
                    <Image id="matchPic" src={this.props.matchPicture}/>
                </div>
            
                <div id="matchNameSpace">
                    <Button size="lg" id="name-btn" block variant="outline-light"  href="/home-matches"> {this.props.matchName} </Button>
                    {/* <a href="/home"> {this.props.matchName} </a> */}
                </div>
               
            </div>
            
        );
    }
}


export default MatchBlock;
