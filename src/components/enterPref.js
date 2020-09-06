import React from 'react';
import ReactDOM from 'react-dom';
import pic from './css/assets/Iconblack.png';
import {Card, CardGroup, Row, Col, Form, Container} from 'react-bootstrap';
import Roommates from '../components/roommates.component'
class Preference extends React.Component{
    render(){
        return (
            <div>
               <div id="singlePref">
                    <h4 id="seperatePref"> {this.props.pref} </h4> 
                    <div id="seperatePref">
                    <Form.Group id="chooseBtn" controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select">
                                                <option>Yes</option>
                                                <option>No</option>
                                            </Form.Control>
                                        </Form.Group>
                    </div>
                    <div id="seperatePref">
                    <Form.Group id="chooseBtn" controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select">
                                                <option>Yes</option>
                                                <option>No</option>
                                            </Form.Control>
                                        </Form.Group>
                    </div>
                    <div>
                    <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" />
                                        </Form.Group>
                    </div>
               </div>
               
               
               
               
                {/* <Container>

               
                 <Row>
                    <Col id="prefStyle" md={3}>
                         <h4> {this.props.pref} </h4>
                    </Col>
                                    <Col md={3}>
                                        <Form.Group id="chooseBtn" controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select">
                                                <option>Yes</option>
                                                <option>No</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group id="chooseBtn" controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select">
                                                <option>Yes</option>
                                                <option>No</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" />
                                        </Form.Group>
                                    </Col>
       
                                </Row>
                    </Container> */}
            </div>
        );
    }
}

export default Preference;