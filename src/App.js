import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar'
import { Switch, Route, Link } from 'react-router-dom'
import { Individualbots } from './components/Individualbots';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/Individualbots' exact >< Individualbots /></Route>
      </Switch>
    </div>
  );
}

export default App;
