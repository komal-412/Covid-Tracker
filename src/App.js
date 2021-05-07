import './App.css';
import SideBar from './Components/SideBar'
import MainDiv from './Components/MainDiv'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/'>
            <SideBar />
            <MainDiv />
          </Route>
          <Route path='/symptoms'>
            <SideBar />
          </Route>
          <Route path='/journal '> 
            <SideBar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
