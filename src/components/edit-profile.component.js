import React, {Component} from 'react';
import pic from './css/assets/Iconblack.png';
import './css/edit-profile.css'
import triton from './css/assets/triton-dark.png'; 
import demoPic from './css/assets/serinaProfPic.png';
import NameAndPic from './username-and-pic'
import RoomeLogo from './roomeLogo.component'
import MatchCard from './matchCard';
import { Form } from 'react-bootstrap';
import {Card, CardGroup, Button, Container, Row, Col, Image, ListGroupItem, ListGroup} from 'react-bootstrap';
export default class EditUserProfile extends Component{
    render(){
        const demoName = "Serina";
        return(
           
            <div id="edit-profile">
                  <Container fluid>
                    <Row>
                        {/* left side */}
                        <Col id="leftTab" md={4}>
                            {/* <Row> */}
                                {/* user name at top left */}
        
                                <Col  id="with-arrow" md={12}>
                                    <div id="back-arrow">
                                        <a href="/home-matches">  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                                        <path fill-rule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/> </svg></a>
                                    </div>
                                   
                                    <div id="userProfileSpacing"> 
                                        <NameAndPic nameOfUser={demoName} userProfPic={demoPic}></NameAndPic> 
                                    </div>
                                    
                                </Col>
                
                                <Col md={12} id="profile-button-top">
                                    <Button size="lg" id="msg-btn" block variant="outline-light"  href="/user-profile">See profile</Button>{' '}
                                </Col>
                                    
                                <Col  md={12} id="profile-button">
                                    <Button size="lg" id="msg-btn" block variant="outline-light"  href="/edit-user-preferences">Edit Preferences</Button>{' '}
                                </Col>
                                   
                                <Col  md={12} id="profile-button">
                                    <Button size="lg" id="msg-btn" block variant="light"  href="/edit-user-profile">Edit Info</Button>{' '}
                                </Col>
                                   
                                <Col  md={12} id="profile-button">
                                    <Button size="lg" id="msg-btn" block variant="outline-light"  href="/">Log out</Button>{' '}
                                </Col>
            
                        </Col>
                        {/* right side */}
                        <Col md={8}>
                            {/* <Row> */}
                                {/* rooMe logo */}
                                <Col md={12}>
                                   <RoomeLogo></RoomeLogo>
                                </Col>

                                    
                                <Col md={12}>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter a replacement email here." />
                                            <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter a new password here." />
                                        </Form.Group>
                                        
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}