import './App.css';
import React from 'react';
import Header from './Components/header/Header';
import Search from './Components/search/Search';
import './css/bootstrap.min.css';
import Github from './Components/github/Github';

function App() {
  return (
    <div className="App">
      <Header />
      <Github />
    </div>
  );
}

export default App;
