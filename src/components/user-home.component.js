import React, {Component} from 'react';
import './css/home.css'
import {Card, Tab, Nav, Tabs,CardGroup, Button, Image, ListGroupItem, ListGroup} from 'react-bootstrap';
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import pic from './css/assets/Iconblack.png'; 
import triton from './css/assets/triton-dark.png'; 

import { Link } from 'react-router-dom';
import axios from 'axios';

//finding matches/other users

const User = props => (
    <tr>
      <td>{props.user.username}</td>
    </tr>
)

export default class UserHome extends Component{

    constructor(props) {
        super(props);
    
        //this.deleteExercise = this.deleteExercise.bind(this)
    
        this.state = {users: []};
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/new-user/')
          .then(response => {
            this.setState({ users: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }

      deleteUser(id) {
        axios.delete('http://localhost:5000/profile/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          users: this.state.users.filter(el => el._id !== id)
        })
      }
    
      userList(id) {
        axios.get('http://localhost:5000/profile/'+id)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

        // axios.post('http://localhost:5000/profile/add', profile)
         // .then(res => console.log(res.data)); 
    }

    render(){
        return(
            <div id="home">
               <Container fluid>
                    <Row  float="center">
                        {/* left side of page */}
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
                        {/* right side of page */}
                        <Col className="main-Content" sm={8} smOffset={4}>
                                <Row>
                                    <div className="title">
                                        rooMe {''}
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
                                        <small className="text-muted" id="roommates">rooMes</small>
                                        </Card.Footer>
                                    </Card>

                                    <Card id="profile-right"> 
                                        <Card.Body>
                                        
                                        {/* tabs on right card to switch between bio/pref */}

                                        <Tabs variant="pills" defaultActiveKey="profile" className="tab">
                                            <Tab id="tabLeft" eventKey="home" title="Bio">
                                                    <Card.Title id="about">About</Card.Title>
                                                        <Card.Text id="bio">
                                                            This is my bio.{' '}
                                                     </Card.Text>
                                            </Tab>
                                            <Tab id="tabRight" eventKey="profile" title="Info">
                                                    <Card.Title id="about">Preferences</Card.Title>
                                                        <Card.Text id="bio">
                                                            preferences go here.{' '}
                                                     </Card.Text>
                                            </Tab>
                                        </Tabs>

                                        
                                        </Card.Body>
                                        <Card.Footer id="see-more">
                                        <small className="text-muted">see more</small>
                                        </Card.Footer>
                                    </Card>

                                </CardGroup>
                               
                               {/* these are the choosing buttons */}
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
