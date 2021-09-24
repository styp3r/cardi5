import React from 'react';
import Navbar from './Navbar.jsx';
import './App.css';
import { Switch , Route} from 'react-router-dom';
import LogIn from './LogIn.jsx';

function App() {

  return (
  <div>
    <Navbar />
      <Switch>
        <Route path="/login">
          <LogIn />
        </Route>
      </Switch>
  </div>);
}

export default App;
