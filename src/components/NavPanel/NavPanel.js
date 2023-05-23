import React, {useState} from 'react';
import styles from './NavPanel.module.scss';
import { btns } from './data';
import ButtonNav from './ButtonNav/ButtonNav';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import {IconButton, Modal} from '@mui/material';

const NavPanel = ({ numBtn, isDownloadBtn }) => {
	const [isOpen, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	return (
		<div>
			<Modal open={isOpen} onClose={() => setOpen(false)}>
				<div>
					<div className={styles.closeBtn}>
						<IconButton onClick={() => setOpen(false)}>
							<CloseIcon width={45} height={45} color={'#FF992C'} />
						</IconButton>
					</div>

					<div className={styles.modal}>
						<div style={{background: 'white', width: 600, height: 600}}>

						</div>
					</div>
				</div>
			</Modal>

			<div className={styles.panel}>
				<div className={styles.btns}>
					{btns.map((dataBtn, num) =>
						<ButtonNav key={num} dataBtn={dataBtn} numBtn={numBtn} />
					)}

					{isDownloadBtn &&
						<button
							className={styles.btnDownload}
							onClick={() => handleClick()}
						>
							<AddCircleIcon color='primary' fontSize='small' />
							<p>Загрузить файл</p>
						</button>
					}
				</div>
			</div>
		</div>
	);
};

export default NavPanel;