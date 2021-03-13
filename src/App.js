import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import CreateNote from './components/CreateNote/CreateNote';

import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Signin from './components/SignIn/Signin';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Home />
            <Footer />
          </Route>

          <Route path='/create'>
            <Navbar />
            <CreateNote />
            <Footer />
          </Route>

          <Route path='/signin'>
            <Signin />
            <Footer />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
