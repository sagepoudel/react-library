import React from 'react';
import './App.css';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Navbar } from './layouts/navbarAndFooter/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
    </div>
  );
}

export default App;
