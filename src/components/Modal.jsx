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
      <div id={style.modal}></div>
    </div >
  );
}