import { useEffect, useState } from 'react';
import ChampionCard from './components/ChampionCard';
import style from './App.module.css';
import Modal from './components/Modal';

const url = `http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
