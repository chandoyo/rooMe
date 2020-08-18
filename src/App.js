import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserHome from "./components/user-home.component";
import LandingPage from "./components/landing-page.component";
import Messages from "./components/messages.component";
import NewUserSetup from "./components/new-user-setup.component";
import NewUserPref from "./components/new-user-pref.component";
import UserProfile from "./components/user-profile.component";
import EditUserProfile from "./components/edit-profile.component";
import EditUserPref from "./components/edit-user-pref.component";
import CreateUserProfile from './components/create-profile.component';

function App() {
  return (
    <div className="rooMe">
     
     <Router>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/profile" component={CreateUserProfile} />
        <Route path="/profile" component={CreateUserProfile} />
        <Route path="/home" component={UserHome} />
        <Route path="/messages" component={Messages} />
        <Route path="/new-user" component={NewUserSetup} />
        <Route path="/new-user-preferences" component={NewUserPref} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/edit-user-profile" component={EditUserProfile} />
        <Route path="/edit-user-preferences" component={EditUserPref} />

     </Router>

    
    </div>
  );
}

export default App;
