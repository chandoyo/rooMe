import React, {Component} from 'react';
import './css/home.css'
import {Card, CardGroup, Button, Container, Row, Col, Image, ListGroupItem, ListGroup} from 'react-bootstrap';
import pic from './css/assets/Iconblack.png'; 
import triton from './css/assets/triton-dark.png'; 

export default class UserHome extends Component{
    render(){
        return(
            <div id="home">
               <Container fluid>
                    <Row  float="center">
                        <Col className="sidebar" sm={4}>
                           
                            {/* <div id="username"> 
                            <Image id="user-pic" src={pic} rounded />
                            User Name 
                            </div>

                            <svg id="gear" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-gear" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"/>
                                <path fill-rule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"/>
                            </svg> */}

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

                            <div id="match">
                                {/* <Container fluid>
                                    <Row float="center">
                                        <Col id="match-pic-box" sm={2}>
                                            <Image id="user-pic" src={pic} rounded />
                                        </Col>
                                        <Col id="match-name" sm={8}>
                                            <Button size="lg" id="match-name-btn" block bsStyle="outline-light">Match Name</Button>{' '}
                                        </Col>
                                    </Row>
                                </Container> */}
                                {/* <ListGroup id="match-list">
                                    <ListGroup.Item active action href="/messages"id="match">Cras justo odio</ListGroup.Item>{''}
                                    <ListGroup.Item id="match">Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item id="match">Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item id="match">Porta ac consectetur ac</ListGroup.Item>
                                    <ListGroup.Item id="match">Vestibulum at eros</ListGroup.Item>
                                </ListGroup> */}
                            </div>
                            

                        </Col>
                        <Col className="main-Content" sm={8} smOffset={4}>
                                <Row>
                                    <div className="title">
                                        RooMe {''}
                                        <Image id="triton" src={triton} />
                                    </div>
                                </Row>  
                                <CardGroup id="cards">
                                    <Card id="profile-left">
                                        <div id="spacing-above-pic">_</div>
                                        <Card.Img variant="top" id="match-pic" src={pic}/>
                                        <Card.Body>
                                        <Card.Title id="name">Name</Card.Title>
                                        <Card.Text id="basic-info">
                                            <p>
                                                College
                                            </p>
                                            <p>
                                                On/Off campus
                                            </p>
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                        <small className="text-muted" id="roommates">RooMe's</small>
                                        </Card.Footer>
                                    </Card>

                                    <Card id="profile-right"> 
                                        <Card.Body>
                                        <Card.Title id="about">About</Card.Title>
                                        <Card.Text id="bio">
                                            This is my bio.{' '}
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Footer id="see-more">
                                        <small className="text-muted">see more</small>
                                        </Card.Footer>
                                    </Card>

                                </CardGroup>
                                
                                <div id="buttons">
                                    <Button id="yes-button" variant="outline-success">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                    </Button>{' '}
                                    <Button id="maybe-button" variant="outline-secondary">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-question" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                        </svg>
                                    </Button>{' '}
                                    <Button id="no-button" variant="outline-danger">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                        </svg>
                                    </Button>{' '}
                                </div>
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}
