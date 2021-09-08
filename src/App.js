import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import EmployeeList from './components/Employee/EmployeeList';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <EmployeeList />
      </Router>
    </div>
  );
}

export default App;
