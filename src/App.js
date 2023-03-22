import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ConstructionRequestForm from './Components/ConstructionRequestForm';
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={<ConstructionRequestForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
