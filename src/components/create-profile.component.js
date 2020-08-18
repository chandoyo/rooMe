import React, {Component} from 'react';
import axios from 'axios';
import triton from './css/assets/triton-dark.png'; 
import './css/create-profile.css'
import {Image} from 'react-bootstrap';

export default class CreateUserProfile extends Component{
    constructor(props) {
        super (props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeMajor = this.onChangeMajor.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            major: '',
            description: '',
            year: 1,
            users: []
        }
    }

    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeMajor(e) {
        this.setState({
            major: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            year: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const profile =  {
            username: this.state.username,
            major: this.state.major,
            description: this.state.description,
            year: this.state.year,
        }
        console.log(profile);

        /*axios.post('http://localhost:5000/profile/add', profile)
        .then(res => console.log(res.data)); */

        window.location = '/';
    }

    render(){
        return(
            <div>
            <h3>Create New Profile</h3>
            <form onSubmit={this.onSubmit}>
              
              <div className="form-group"> 
                
                <label id="formHeader">Username: </label>
                <select ref="userInput"
                    required
                    className="form-control"
                    id="input"
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
                    {
                      this.state.users.map(function(user) {
                        return <option 
                          key={user}
                          value={user}>{user}
                          </option>;
                      })
                    }
                </select>
              
              </div>
              <div className="form-group">
                <label id="formHeader">Major: </label>
                <input 
                    type="text" 
                    id="input"
                    className="form-control"
                    value={this.state.major}
                    onChange={this.onChangeMajor}
                    />
              </div>
              
              <div  className="form-group"> 
                <label id="formHeader">Description: </label>
                <input  
                    type="text"
                    id="input"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
              </div>
             
              <div className="form-group">
                <label id="formHeader">Year: </label>
                <input 
                    id="input"
                    type="text" 
                    className="form-control"
                    value={this.state.year}
                    onChange={this.onChangeYear}
                    />
              </div>
             

      
              <div className="form-group">
                <input id="submitBtn" type="submit" value="Create Profile" className="btn btn-outline-dark" />
              </div>
            </form>
          </div>

        );
    }
}