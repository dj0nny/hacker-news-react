import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import News from './components/News';
import Newest from './components/Newest';
import Ask from './components/Ask';
import Show from './components/Show';
import Jobs from './components/Jobs';
import NewsDetail from './components/NewsDetail'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={News} />
            <Route exact path="/newest" component={Newest} />
            <Route exact path="/ask" component={Ask} />
            <Route exact path="/show" component={Show} />
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/news/:id" component={NewsDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;