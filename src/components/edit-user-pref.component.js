import React, {Component} from 'react';
import pic from './css/assets/Iconblack.png';
import './css/edit-user-pref.css'
import {Card, CardGroup, Button, Container, Row, Col, Image, ListGroupItem, ListGroup} from 'react-bootstrap';
export default class EditUserPref extends Component{
    render(){
        return(
            <div id="user-pref">
                 <Container fluid>
                    <Row  float="center">
                        <Col className="sidebar" sm={4}>
                           
                            <Row id="user-information">
                            <Col id="arrow" sm={2}>
                            <a href="/home">  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                                    <path fill-rule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/> </svg></a>
                            </Col>
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
                                    <Row float="center" id="profile-button">
                                        <Col>
                                        <Button size="lg" id="msg-btn" block variant="outline-light"  href="/user-profile">See profile</Button>{' '}
                                        </Col>
                                    </Row>
                                    <Row float="center" id="profile-button">
                                        <Col>
                                        <Button size="lg" id="msg-btn" block variant="outline-light"  href="/edit-user-preferences">Edit Preferences</Button>{' '}
                                        </Col>
                                    </Row>
                                    <Row float="center" id="profile-button">
                                        <Col>
                                        <Button size="lg" id="msg-btn" block variant="outline-light"  href="/edit-user-profile">Edit Info</Button>{' '}
                                        </Col>
                                    </Row>
                                    <Row float="center" id="profile-button">
                                        <Col>
                                        <Button size="lg" id="msg-btn" block variant="outline-light"  href="/">Log out</Button>{' '}
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