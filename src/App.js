import React from 'react';
import Navbar from './Navbar.jsx';
import './App.css';
import { Switch , Route} from 'react-router-dom';
import LogIn from './LogIn.jsx';
import SignUp from './SignUp.jsx';
import Home from './Home.jsx';

function App() {

  return (
  <div>
    <Navbar />
      <Switch>
        <Route path="/" component = {Home}/>
        <Route path="/login" component = {LogIn}/>
        <Route path="/signup" component = {SignUp}/>
      </Switch>
  </div>);
}

export default App;
