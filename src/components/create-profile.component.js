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
        this.onChangeBio = this.onChangeBio.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            major: '',
            bio: '',
            year: '',
            //users: []
        }
    }

    componentDidMount() {
        /*
        axios.get('http://localhost:5000/profile/')
        .then(response => {
          if (response.data.length > 0) {
            this.setState({
              profile: response.data.map(profile => profile.username),
              username: response.data[0].username
            })
          }
        })
        .catch((error) => {
          console.log(error);
        })
        */
  
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

    onChangeBio(e) {
        this.setState({
            bio: e.target.value
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
            bio: this.state.bio,
            year: this.state.year,
        }
        console.log(profile);

        axios.post('http://localhost:5000/profile/add', profile)
         .then(res => console.log(res.data)); 

        window.location = '/home-matches';
    }

    render(){
        return(
            <div>
            <h3>Create New Profile</h3>
            <form onSubmit={this.onSubmit}>
              
              <div className="form-group"> 
                
                <label id="formHeader">Username: </label>  
                <input 
                    type="text" 
                    id="input"
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    />
              
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
                <label id="formHeader">Bio: </label>
                <input  
                    type="text"
                    id="input"
                    required
                    className="form-control"
                    value={this.state.bio}
                    onChange={this.onChangeBio}
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