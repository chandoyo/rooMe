import React from 'react';
import ReactDOM from 'react-dom';
import pic from './css/assets/Iconblack.png';
import {Card, CardGroup, Col, Container, Row, Form} from 'react-bootstrap';
import Roommates from '../components/roommates.component'
import Preference from './enterPref'
class PrefCard extends React.Component{
    render(){
        return (
            <div>
                   
                            <Container id="prefCard">
                                <Row>
                                    <Col id="prefTitles" md={3}>
                                        <h5> Preference </h5>
                                    </Col>
                                    <Col  id="prefTitles" md={3}>
                                         <h5> Me </h5>
                                    </Col>
                                    <Col id="prefTitles" md={3}>
                                         <h5> Them </h5>
                                    </Col>
                                    <Col id="prefTitles" md={3}>
                                         <h5> Display </h5>
                                    </Col>
                                    
                                    
                                    <Col id="prefStyle" md={3}>
                                        <h4> Partying </h4>
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

                                    <Col id="prefStyle" md={3}>
                                        <h4> Loud Music </h4>
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


                                    <Col id="prefStyle" md={3}>
                                        <h4> Guests </h4>
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



                                    <Col id="prefStyle" md={3}>
                                        <h4> Smoking </h4>
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
                                    <Col id="prefStyle" md={3}>
                                        <h4> Cleanliness </h4>
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
                            </Container>

                  
            </div>
        );
    }
}

export default PrefCard;