import React from 'react';
import { Router, Link } from '@reach/router';
import Main from './views/Main';
import Update from './views/Update';
import New from './views/New';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <Main path="/"/>
        <Update path="/edit/:id"/>
        <New path="/new"/>
      </Router>
    </div>
  );
}

export default App;
