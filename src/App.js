import './App.css';
import SideBar from './Components/SideBar'
import MainDiv from './Components/MaindivComponents/Maindiv/MainDiv'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Symptom from './Components/Symptom/Symptom';
import Journal from './Components/Journal/Journal';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
        <Route path='/symptom'>
            <SideBar />
            <Symptom />
          </Route>
          <Route path='/Journal'>
            <SideBar />
            <Journal/>
          </Route>
        <Route path='/symptoms'>
            <SideBar />
            <Symptom />
          </Route>
        <Route path='/'>
           <SideBar />
            <MainDiv />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
