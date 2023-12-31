import { useEffect, useState } from 'react';
import ChampionCard from './components/ChampionCard';
import style from './App.module.css';
import Modal from './components/Modal';

const url = `http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json`;

function App() {
  const [champions, setChampions] = useState({});
  const [selectedChamp, setSelectedChamp] = useState({});
  const [open, setOpen] = useState(false);

  async function fetchChampions() {
		try {
			const response = await (await fetch(url)).json();
			setChampions(response.data);
		} catch (err) {
			console.log('err', err);
		}
  }
  
  function openModal(champName) {
		setSelectedChamp(champions[champName]);
		setOpen(true);
  }
  
  function closeModal() {
		setOpen(false);
	}

  useEffect(() => {
		fetchChampions();
  }, []);
  
  const championsArray = Object.entries(champions);
	return (
    <div className='App'>
      <header>
				<h1>The League of Legends</h1>
      </header>
      
      {open && <Modal champName={selectedChamp} closeModal={closeModal} />}

      <div className={style.container}>
        {championsArray.map(([champName]) => (
          <ChampionCard
            key={champName}
            champName={champName}
            onClick={() => setOpen(true)}
            openModal={openModal}/>
        ))}
      </div>
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
