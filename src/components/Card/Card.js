import React from 'react';
import styles from './Card.module.scss';

const Card = ({ dataBtn }) => {
	const {text, value, color} = dataBtn;

	return (
		<div className={styles.cardBody}>
			<p className={styles.text}>
				{text}
			</p>

			<div className={styles.value} style={{color: `${color}`}}>
				{value}
			</div>
		</div>
	);
};

export default Card;