import React from 'react';
import styles from './ButtonNav.module.scss';
// import { Icon} from "@mui/material";

const ButtonNav = ({ dataBtn }) => {
	const { name, icon, active } = dataBtn;
	const colorBackground = active ? '#E6EFFF' : '#FFFFFF';
	const colorIcon = active ? 'primary' : 'disabled';

	return (
		<button className={styles.btn} style={{background: colorBackground}}>
			{icon(colorIcon)}
			<p>{name}</p>
		</button>
	);
};

export default ButtonNav;