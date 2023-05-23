import React from 'react';
import styles from './NavPanel.module.scss';
import { btns } from './data';
import ButtonNav from './ButtonNav/ButtonNav';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const NavPanel = () => {

	return (
		<div className={styles.panel}>
			<div className={styles.btns}>
				<button className={styles.btnDownload}>
					<AddCircleIcon color='primary' fontSize='small' />
					<p>Загрузить файл</p>
				</button>
				{btns.map((dataBtn, num) =>
					<ButtonNav key={num} dataBtn={dataBtn} />
				)}
			</div>
		</div>
	);
};

export default NavPanel;