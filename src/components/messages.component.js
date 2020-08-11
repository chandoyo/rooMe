import React, {Component} from 'react';
import './css/messages.css'
import {Card, CardGroup, Button, Container, Row, Col, Image, ListGroupItem, ListGroup} from 'react-bootstrap';
export default class Messages extends Component{
    render(){
        return(
            <div id="messages">
                 <Container fluid>
                    <Row  float="center">
                        <Col className="sidebar" sm={4}>

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