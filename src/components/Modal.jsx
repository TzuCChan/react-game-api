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
      </div>
      </div>
    </div >
  );
}