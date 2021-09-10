import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation'
import NavBar from './components/NavBar';

function App() {
  return (
    <Router >
      <NavBar />
      <Navigation />
    </Router>
  );
}

export default App;
