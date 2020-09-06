import React from 'react';
import ReactDOM from 'react-dom';
import { setConfiguration, Row, Col, Container } from "react-grid-system";

class Roommate extends React.Component{
    render(){
        return (
            <div>
                <div>
                    {this.props.roommateName}
                </div>
            </div>
        );
    }
}

export default Roommate;