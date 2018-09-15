import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Artist from './components/Artist';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/artist/:artistid" component={Artist} />
      </div>
    </BrowserRouter>
  )
}

export default App;
