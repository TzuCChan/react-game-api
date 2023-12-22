import style from './Modal.module.css';
import { useEffect } from 'react';

function Modal({ champName, closeModal }) {
  useEffect(() => {
    fetch(`http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion/${champName.name}.json
    `);
    console.log(champName.name);
  });
  return (
    <div className={style.modalContainer} onClick={closeModal}>
      <div id={style.modal}>
        <div className={style.modalGuts}>
        <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName.name}_0.jpg`}
            id={style.splash}
            alt=''
          />
          <h3 id={style.champName}>{champName.name}</h3>
          <p id={style.title}>{champName.title}</p>
          <p id={style.tags}>{champName.tags.join(`, `)}</p>
          <p id={style.blurb}>{champName.blurb}</p>
      </div>
      </div>
    </div >
  );
}