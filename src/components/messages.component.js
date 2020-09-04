import React, {Component} from 'react';
import './css/messages.css'
import pic from './css/assets/Iconblack.png';
import {Card, CardGroup, Button, Container, Row, Col, Image, ListGroupItem, ListGroup} from 'react-bootstrap';
import triton from './css/assets/triton-dark.png'; 
import io from "socket.io";

// let server = "http://localhost:5000";
// const socket = io(server);
const socket = io('http://localhost:3000')
socket.on('chat-message', data => {
    console.log(data)
})
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('What is your name?')
appendMessage('You joined')
socket.emit('new-user', name)

socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', name => {
  appendMessage(`${name} connected`)
})

socket.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`)
})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  appendMessage(`You: ${message}`)
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}

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
                                <Row>
                                    <div className="title">
                                        rooMe {''}
                                        <Image id="triton" src={triton} />
                                    </div>
                                </Row>   


                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}