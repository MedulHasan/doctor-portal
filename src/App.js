import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/appointment">
            <Appointment />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
