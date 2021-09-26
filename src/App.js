import './App.css';
import Home from './components/Home';
import CreateLink from './components/CreateLink';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/" component = {Home} exact/>
        <Route path = "/createlink" component = {CreateLink}/>
      </Switch>
    </div>
  );
}

export default App;
