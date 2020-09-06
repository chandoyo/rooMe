import React from 'react';
import './components/css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
import UserHome from "./components/user-home.component";
import LandingPage from "./components/landing-page.component";
import Messages from "./components/messages.component";
import NewUserSetup from "./components/new-user-setup.component";
import NewUserPref from "./components/new-user-pref.component";
import UserProfile from "./components/user-profile.component";
import EditUserProfile from "./components/edit-profile.component";
import EditUserPref from "./components/edit-user-pref.component";
import CreateUserProfile from './components/create-profile.component';
import ProfileList from './components/profile-list.component';  
import Join from './components/join.component';
import Login from './components/login.component';
import Temp from './components/matchesNew';
//import { Provider } from "react-redux";
//import store from "./store";

function App() {
  return (
     
    //<Provider store={store}>

    
     <Router>
       <div className="rooMe">
        <Route path="/" component={LandingPage} exact/>
        <Route path="/profile" component={CreateUserProfile} />

        <Route path="/join" component={Join} />
        <Route path="/login" component={Login} />
        
        <Route path="/home-old" component={UserHome} />
        <Route path="/messages" component={Messages} />
        <Route path="/new-user" component={NewUserSetup} />
        <Route path="/new-user-preferences" component={NewUserPref} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/edit-user-profile" component={EditUserProfile} />
        <Route path="/edit-user-preferences" component={EditUserPref} />
        
        <Route path="/profile-list" component={ProfileList} /> 
        <Route path="/home-matches" component={Temp} /> 
         
        </div>

     </Router>

     //</Provider>

    
  );
}

export default App;
