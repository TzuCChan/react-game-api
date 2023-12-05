import style from './ChampionCard.module.css';

function ChampionCard({ champName, openModal }) {
	function onClick() {
		openModal(champName);
	}
	return (
		<article className={style.card} onClick={onClick}>
			<img
				src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champName}_0.jpg`}
				className={style.cardImg}
				alt=''
			/>
		</article>
	);
}

export default ChampionCard;