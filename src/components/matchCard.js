import React from 'react';
import ReactDOM from 'react-dom';
import pic from './css/assets/Iconblack.png';
import {Card, CardGroup} from 'react-bootstrap';
import Roommates from '../components/roommates.component'
class MatchCard extends React.Component{
    render(){
        return (
            <div>
                <CardGroup id="cardsSize">
                    <Card id="cardLeft">
                        <Card.Img variant="top" id="cardMatchPic" src={pic}/>
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
                            <small className="text-muted">see more</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        );
    }
}

export default MatchCard;