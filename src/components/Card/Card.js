import React from 'react';
import styles from './Card.module.scss';

const Card = ({ dataBtn, heightCard = 50, action = () => {} }) => {
	const { text, value, color } = dataBtn;

	return (
		<div className={styles.cardBody} onClick={() => action()}>
			<p className={styles.text} style={{height: `${heightCard}px`}}>
				{text}
			</p>

			<div className={styles.value} style={{color: `${color}`}}>
				{value}
			</div>
		</div>
	);
};

export default Card;