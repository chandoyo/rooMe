import React, {Component} from 'react';
import './css/messages.css'
import pic from './css/assets/Iconblack.png';
import {Card, CardGroup, Button, Container, Row, Col, Image, ListGroupItem, ListGroup} from 'react-bootstrap';
export default class Messages extends Component{
    render(){
        return(
            <div id="messages">
                 <Container fluid>
                    <Row  float="center">
                        <Col className="sidebar" sm={4}>
                           
                            <Row id="user-information">
                                <Col sm={4}>
                                    <Image id="user-pic" src={pic} rounded />
                                </Col>
                                <Col sm={4}>
                                    <div>
                                        {/* <p id="username" href="/user-profile"> User Name </p> {''} */}
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
                                    
                                
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}