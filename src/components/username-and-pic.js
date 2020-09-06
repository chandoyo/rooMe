import React from 'react';
import ReactDOM from 'react-dom';
import pic from './css/assets/Iconblack.png';
import {Image, Button} from 'react-bootstrap';
import { setConfiguration, Row, Col, Container } from "react-grid-system";

class NameAndPic extends React.Component{
    render(){
        return (
          <div id="nameAndPicBox">
            
            {/* picture */}
            <div>
              <Image id="userProfPicStyle" src={this.props.userProfPic}/>
            </div>

            {/* name */}
            <div id="nameOfUserStyle">
              {/* <a href="/user-profile"> {this.props.nameOfUser} </a> */}
              <Button size="lg" id="name-btn" block variant="outline-light"  href="/user-profile"> {this.props.nameOfUser}  </Button>{' '}
            </div>     
          
          </div>
        
        );
    }
}


export default NameAndPic;
