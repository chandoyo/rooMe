/* We might not need this file */
/* List of Profiles */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Profile = props => (
  <tr>
    <td>{props.profile.username}</td>
    <td>{props.profile.major}</td>
    <td>{props.profile.bio}</td>
    <td>{props.profile.year}</td>
    <td>
      <Link to={"/edit/"+props.profile._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProfile(props.profile._id) }}>delete</a>
    </td>
  </tr>
)


export default class ProfileList extends Component {
  constructor(props) {
    super(props);

    this.deleteProfile = this.deleteProfile.bind(this);

    this.state = {profile: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/profile/')
      .then(response => {
        this.setState({ profile: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProfile(id) {
    axios.delete('http://localhost:5000/profile/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      profile: this.state.profile.filter(el => el._id !== id)
    })
  }

  profileList() {
    return this.state.profile.map(currentprofile => {
      return <Profile profile={currentprofile} deleteProfile={this.deleteProfile} key={currentprofile._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>rooMe Profiles</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Major</th>
              <th>Bio</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.profileList() }
          </tbody>
        </table>
      </div>
    )
  }
}