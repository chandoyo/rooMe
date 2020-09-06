import React from 'react';
import ReactDOM from 'react-dom';
import pic from './css/assets/Iconblack.png';
import {Card, Button, CardGroup} from 'react-bootstrap';
import Roommates from '../components/roommates.component'
import ReactCardFlip from 'react-card-flip';

import { Link } from 'react-router-dom';
import axios from 'axios';

class MatchCard extends React.Component{


    constructor(props) {
        super();
            this.state = {
                isFlipped: false
            };
            this.handleClick = this.handleClick.bind(this);
    
        //this.deleteExercise = this.deleteExercise.bind(this)
    
        this.state = {users: []};
      }

    handleClick(e) {
        e.preventDefault();
          this.setState(prevState => ({isFlipped: !prevState.isFlipped }));
    }

    render(){
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
            <div>
                <CardGroup id="cardsSize">
                    <Card id="cardLeft">
                        <Card.Img variant="top" id="cardMatchPic" src={this.props.pic}/>
                        <Card.Body>
                            <Card.Title id="cardName">
                                {this.props.matchName}
                            </Card.Title>
                            <Card.Text id="cardLeftInfo">
                                <p>
                                {this.props.college}
                                </p>
                                <p>
                                {this.props.livingStatus}
                                </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted" id="roommates">rooMes</small>
                            {/* <p>
                            <Roommates roommateName="roommate"> </Roommates>
                            </p> */}
                        </Card.Footer>
                    </Card>

                    <Card id="cardRight"> 
                        <Card.Body>
                     
                        </Card.Body>
                        <Card.Footer>
                        <Button id="see-more-btn" variant="outline-link" size="sm" onClick={this.handleClick}>see more</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>

            <div>
                <CardGroup id="cardsSize">
                    <Card id="cardLeft">
                        <Card.Img variant="top" id="cardMatchPic" src={this.props.pic}/>
                        <Card.Body>
                            <Card.Title id="cardName">
                                {this.props.matchName}
                            </Card.Title>
                            <Card.Text id="cardLeftInfo">
                                <p>
                                {this.props.college}
                                </p>
                                <p>
                                {this.props.livingStatus}
                                </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted" id="roommates">rooMes</small>
                            {/* <p>
                            <Roommates roommateName="roommate"> </Roommates>
                            </p> */}
                        </Card.Footer>
                    </Card>

                    <Card id="cardRight"> 
                        <Card.Body>
                     
                        </Card.Body>
                        <Card.Footer>
                            <Button id="see-more-btn" variant="outline-link" size="sm" onClick={this.handleClick}>back</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
            </ReactCardFlip>

        );
    }
}

export default MatchCard;