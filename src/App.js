import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/header.component';
import LandingPage from './pages/landing/landing.component';
import Footer from './components/Footer/footer.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path='/' component={LandingPage} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
