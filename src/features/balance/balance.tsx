import styles from './balance.module.scss';

export const Balance = () => {
	const balance = 0;

	return (
		<div className={styles.balance}>
			<img src="./images/coin.svg" alt="Монетка"/>
			<span className={styles.coins}>{balance}</span>
		</div>
	);
};
