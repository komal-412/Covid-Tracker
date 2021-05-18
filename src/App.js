import './App.css';
import SideBar from './Components/SideBar'
import MainDiv from './Components/MaindivComponents/Maindiv/MainDiv'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Symptom from './Components/Symptom';
import Journal from './Components/Journal';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
        <Route path='/symptom'>
            <SideBar />
            <Symptom />
          </Route>
<<<<<<< HEAD
        <Route path='/journal'>
            <SideBar />
            <Journal />
=======
          <Route path='/journal'>
            <SideBar />
            <Journal/>
>>>>>>> 7241903df616f1aeff917514622662ac33294034
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
