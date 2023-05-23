import React from 'react';
import styles from './ButtonNav.module.scss';
import {NavLink} from 'react-router-dom';

const ButtonNav = ({ dataBtn, numBtn }) => {
	const { id, name, icon, link } = dataBtn;
	const activeBtn = numBtn === id;
	const colorBackground = activeBtn ? '#E6EFFF' : '#FFFFFF';
	const colorIcon = activeBtn ? '#367BF5' : '#bdbdbd';

	return (
		<NavLink
			className={styles.btn}
			style={{background: colorBackground}}
			to={link}
		>
			<div className={styles.icon}>
				{icon(colorIcon)}
			</div>
			<p>{name}</p>
		</NavLink>
	);
};

export default ButtonNav;