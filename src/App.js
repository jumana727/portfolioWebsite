
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages';
import Contact from './pages/contact.js';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </Router>
  );
}

export default App;
