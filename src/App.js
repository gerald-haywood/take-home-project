import './App.css';
import React from 'react';
import Header from './Components/header/Header';
import './css/bootstrap.min.css';
import Github from './Components/github/Github';

/**
 * Renders the web application.
 */
const App = () => {
  return (
    <div>
      <Header />
      <Github />
    </div>
  );
}

export default App;
