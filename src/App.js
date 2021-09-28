import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import Help from './components/Help';
import Search from './components/Search';
  
function App() {
  
  
  return (
      <div>
      <Navbar />
        <Switch>
          <Route path = "/" component = {Home} exact/>
          <Route path = "/create" component = {Create} exact/>
          <Route path = "/help" component = {Help} exact/>
          <Route path = "/search" component = {Search} exact/>
        </Switch>
      </div>
  );
}
  
export default App;