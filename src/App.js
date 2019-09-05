import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import News from './components/News';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" component={News} />
        </div>
      </Router>
    )
  }
}

export default App;