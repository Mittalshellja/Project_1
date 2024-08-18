import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import AboutHer from '../src/components/AboutHer';
import Friendship from '../src/components/Friendship';
import Gallery from '../src/components/Gallery';
import SpecialMoments from '../src/components/SpecialMoments';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <NavLink to="/" exact activeClassName="active">About Her</NavLink>
          <NavLink to="/friendship" activeClassName="active">Friendship</NavLink>
          <NavLink to="/gallery" activeClassName="active">Gallery</NavLink>
          <NavLink to="/special-moments" activeClassName="active">Special Moments</NavLink>
        </nav>
        <Routes>
          <Route exact path="/" element={<AboutHer/>} />
          <Route exact path="/friendship" element={<Friendship/>} />
          <Route exact path="/gallery" element={<Gallery/>} />
          <Route exact path="/special-moments" element={<SpecialMoments/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
