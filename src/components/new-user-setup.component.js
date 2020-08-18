import React, {Component} from 'react';
import { Form } from 'react-bootstrap';

export default class NewUserSetup extends Component{
    render(){
        return(
            <div id="new-user">
                <p> new users set up account here </p>

                <Form.Group>
                    <div className="container">
                        <Form.Control type="text" placeholder="Name" />
                        <br />
                    </div>
                </Form.Group>
            </div>
        );
    }
}