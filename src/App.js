import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import News from './components/News';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={News} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;