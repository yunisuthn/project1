import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link }from "react-router-dom";
import './App.css';
import Acceuil from './component/Acceuil';
import Apropos from './component/Apropos';
import Footer from './component/Footer';
import Contact from './component/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
              <Link to = "/Acceuil" style={{ marginRight: 'none' }}>Acceuil</Link>

              <Link to = "/Apropos">A propos</Link>
            
              <Link to = "/Contact">Contact</Link>
            
          <Route exact path='/' component={Acceuil}/>
          <Route exact path='/Acceuil' component={Acceuil}/>
          <Route  path='/Apropos' component={Apropos}/>
          <Route  path='/Contact' component={Contact}/>
          <div className = 'footer'>
            <Footer />
          </div> 
        </div>

      </Router>
    );
  }
}

export default App;
