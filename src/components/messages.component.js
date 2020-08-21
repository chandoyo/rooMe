import React, { Component } from 'react';
import './css/messages.css'
import pic from './css/assets/Iconblack.png';
import { Card, CardGroup, Button, Container, Row, Col, Image, ListGroupItem, ListGroup, InputGroup } from 'react-bootstrap';
import triton from './css/assets/triton-dark.png';
import { Form, Icon, Input /*, Button*/ } from 'antd';
import io from "socket.io-client";
import { connect } from "react-redux";
import  moment  from "moment";

export /*default*/ class Messages extends Component {
    state= {
        chatMessage: "",
    }

    componentDidMount() {
        let server = "http://localhost:5000";
        this.socket = io(server);

        this.socket.on("Output Chat Message", messageFromBackEnd => {
            console.log(messageFromBackEnd)
        })
    }

    hanleSearchChange =(e) => {
        this.setState({
            chatMessage: e.target.value
        })
    }

    submitChatMessage = (e) => {
        e.preventDefault();

        let chatMessage = this.state.chatMessage 
        console.log(this.props);

        let userId = this.props.user.userData._id 
        let userName = this.props.user.userData.name;
        let userImage = this.props.user.userData.image;
        let nowTime = moment();
        let type = "Image"

        this.socket.emit("Input Chat Message", {
            chatMessage,
            userId,
            userName,
            userImage,
            nowTime,
            type
        });
        this.setState({ chatMessage: "" })
    }

    render() {
        return (
            <div id="messages">
                <Container fluid>
                    <Row float="center">
                        <Col className="sidebar" sm={4}>

                            <Row id="user-information">
                                <Col sm={4}>
                                    <Image id="user-pic" src={pic} rounded />
                                </Col>
                                <Col sm={4}>
                                    <div>
                                        {/* <p id="username" href="/user-profile"> User Name </p> {''} */}
                                        <Button size="lg" id="username" block variant="outline-light" href="/user-profile"> Name </Button>{' '}
                                    </div>
                                </Col>
                            </Row>

                            <div id="nav-buttons">
                                <Container fluid>
                                    <Row float="center">
                                        <Col sm={6}>
                                            <Button size="lg" id="msg-btn" block variant="outline-light" href="/messages">Messages</Button>{' '}
                                        </Col>
                                        <Col sm={6}>
                                            <Button size="lg" id="mtch-btn" block variant="outline-light" href="/home">Matches</Button>{' '}
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

                            {/* <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                                <div className="infinite-container">
                                    {/* {this.props.chats && (
                                        <div>{this.renderCards()}</div>
                                    )} */}
                            {/* <div
                                        ref={el => {
                                            this.messagesEnd = el;
                                        }}
                                        style={{ float: "left", clear: "both" }}
                                    />
                                </div> */}

                            <Row >
                                <Row span={70}>
                                </Row>
                                <Form layout="inline" onSubmit={this.submitChatMessage}>
                                    <Col span={18}>
                                        <Input
                                            id="message"
                                            placeholder="Let's start talking"
                                            type="text"
                                            value={this.state.chatMessage}
                                            onChange={this.hanleSearchChange}
                                        />
                                    </Col>
                                    <h1>hi</h1>
                                    <Col span={4}>
                                        <Button type="submit" style={{ width: '100%' }} onClick={this.submitChatMessage} htmlType="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Form>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Messages);