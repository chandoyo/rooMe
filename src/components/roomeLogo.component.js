import React from 'react';
import ReactDOM from 'react-dom';
import pic from './css/assets/Iconblack.png';
import {Image, Button} from 'react-bootstrap';
import triton from './css/assets/triton-dark.png'; 
import { setConfiguration, Row, Col, Container } from "react-grid-system";

class RoomeLogo extends React.Component{
    render(){
        return (
            <div id="websiteHeaderLogo">
                <div id="webName">
                    rooMe {''}
                </div>
                <div>
                    <Image id="triton" src={triton} />
                </div>
            </div>
            
        );
    }
}


export default RoomeLogo;
