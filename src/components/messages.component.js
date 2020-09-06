import React, {Component} from 'react';
import './css/messages.css'
import pic from './css/assets/Iconblack.png';
import {Card, CardGroup, Button, Container, Row, Col, Image, ListGroupItem, ListGroup} from 'react-bootstrap';
import triton from './css/assets/triton-dark.png'; 
import demoPic from './css/assets/serinaProfPic.png';
import NameAndPic from './username-and-pic'
import RoomeLogo from './roomeLogo.component'

export default class Messages extends Component{
    render(){
        const demoName = "Serina";
        return(
            <div id="messages">
                 <Container fluid>
                    <Row>
                        {/* left side */}
                        <Col id="leftTab" md={4}>
                            {/* <Row> */}
                                {/* user name at top left */}
                                <Col md={12}>
                                    <div id="userProfileSpacing"> <NameAndPic nameOfUser={demoName} userProfPic={demoPic}></NameAndPic> </div>
                                    
                                </Col>
                
                                <Col md={12}>
                                    <div id="toggleButtons">
                                        <div id="toggleButtonSpacing">
                                            <Button size="lg" id="msg-btn" block variant="light"  href="/messages">Messages</Button>
                                        </div>
                                        <div>
                                            <Button size="lg" id="mtch-btn" block variant="outline-light"  href="/home-matches">Matches</Button>
                                        </div>
                                               
                                    </div>
                                </Col>
                             
                        </Col>
                        {/* right side */}
                        <Col md={8}>
                            {/* <Row> */}
                                {/* rooMe logo */}
                                <Col md={12}>
                                   <RoomeLogo></RoomeLogo>
                                </Col>
                        </Col>
                    </Row>
                </Container>
                 {/* <Container fluid>
                    <Row  float="center">
                        <Col className="sidebar" sm={4}>
                           
                            <Row id="user-information">
                                <Col sm={4}>
                                    <Image id="user-pic" src={pic} rounded />
                                </Col>
                                <Col sm={4}>
                                    <div>
                                        <Button size="lg" id="username" block variant="outline-light"  href="/user-profile"> Name </Button>{' '}
                                  </div>
                                </Col>
                            </Row>
                            
                            <div id="nav-buttons">
                                <Container fluid>
                                    <Row float="center">
                                        <Col sm={6}>
                                        <Button size="lg" id="msg-btn" block variant="outline-light"  href="/messages">Messages</Button>{' '}
                                        </Col>
                                        <Col sm={6}>
                                        <Button size="lg" id="mtch-btn" block variant="outline-light"  href="/home">Matches</Button>{' '}
                                        </Col>
                                    </Row>
                                </Container>
                            </div>

                        </Col>
                        <Col className="main-Content" sm={8} smOffset={4}>
                                <Row>
                                    <div className="title">
                                        rooMe {''}
                                        <Image id="triton" src={triton} />
                                    </div>
                                </Row>
                                    
                                
                        </Col>
                    </Row>

                </Container> */}

            </div>
        );
    }
}