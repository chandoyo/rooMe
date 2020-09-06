import React, {Component} from 'react';
import './css/App.css';
import pic from './css/assets/Iconblack.png';
import squidward from './css/assets/handsomesquid.jpeg';
import demoPic from './css/assets/serinaProfPic.png';
import MatchCard from './matchCard';
import MatchBlock from './matchBlock';
import NameAndPic from './username-and-pic'
import RoomeLogo from './roomeLogo.component'
import {Image, Button, Modal} from 'react-bootstrap';
import {setConfiguration, Row, Col, Container } from "react-grid-system";
export default class Temp extends Component{
    
    render(){
        const cardExampleName = "Match Name"; 
        const cardExCollege = "Warren College"; 
        const cardExStatus = "On Campus"; 
        const demoName = "Serina";
        return(
            <div id="home">
                <Container fluid>
                    <Row>
                        {/* left side */}
                        <Col id="leftTab" xs={12} md={4}>
                            {/* <Row> */}
                                {/* user name at top left */}
                                <Col md={12}>
                                    <div id="userProfileSpacing"> <NameAndPic nameOfUser={demoName} userProfPic={demoPic}></NameAndPic> </div>
                                    
                                </Col>
                
                                <Col md={12}>
                                    <div id="toggleButtons">
                                        <div id="toggleButtonSpacing">
                                            <Button size="lg" id="msg-btn" block variant="outline-light"  href="/messages">Messages</Button>
                                        </div>
                                        <div>
                                            <Button size="lg" id="mtch-btn" block variant="light"  href="/home-matches">Matches</Button>
                                        </div>
                                               
                                    </div>
                                </Col>
                                {/* <hr/> */}
                                {/* matches */}

                               
                                <Col id="matchesList" md={12}>
                                    <MatchBlock matchName="Match A" matchPicture={squidward}> </MatchBlock>
                                </Col>
                                <Col md={12}>
                                    <MatchBlock matchName="Match B" matchPicture={pic}> </MatchBlock>
                                </Col>
                                <Col md={12}>
                                    <MatchBlock matchName="Match C" matchPicture={pic}> </MatchBlock>
                                </Col>
                                <Col md={12}>
                                    <MatchBlock matchName="Match D" matchPicture={pic}> </MatchBlock>
                                </Col>
                                <Col md={12}>
                                    <MatchBlock matchName="Match E" matchPicture={pic}> </MatchBlock>
                                </Col>
                            {/* </Row> */}
                        </Col>
                        {/* right side */}
                        <Col xs={12} md={8}>
                            {/* <Row> */}
                                {/* rooMe logo */}
                                <Col md={12}>
                                   <RoomeLogo></RoomeLogo>
                                </Col>
                               
                                <Col md={12} id="matchesCardStyle">
                                    <MatchCard matchName={cardExampleName} college={cardExCollege} pic={squidward} livingStatus={cardExStatus}></MatchCard>
                                </Col>
                                
                                {/* choose buttons */}
                                <Col md={12}>
                                <div id="ynButtons">
                                    <Button id="yes-btn" variant="outline-success">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                    </Button>{' '}
                                    <Button id="no-btn" variant="outline-danger">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                        </svg>
                                    </Button>{' '}
                                </div>
                                </Col>
                            {/* </Row> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}