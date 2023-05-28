import React, {useState} from 'react';
import styles from './NavPanel.module.scss';
import { btns } from './data';
import ButtonNav from './ButtonNav/ButtonNav';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import {IconButton, Modal} from '@mui/material';
import Door from '../../static/Door';
import authState from '../../store/authState';
import DragAndDrop from '../DragAndDrop/DragAndDrop';
import { apiPost } from '../../api/allApi';
import connectsState from '../../store/connectsState';
import Registration from '../Registration/Registration';

const NavPanel = ({ numBtn, isDownloadBtn = false, isProfile = false }) => {
	const [isOpen, setOpen] = useState(false);
	const { linkLogout } = connectsState;

	const handleDowload = () => {
		setOpen(true);
	};

	const handleLogOut = () => {
		apiPost( linkLogout ).then(() =>
			authState.setLogOut()
		);
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
						{isDownloadBtn ? <DragAndDrop/> : <Registration/>}
					</div>
				</div>
			</Modal>

			<div className={styles.panel}>
				<div className={styles.btns}>
					{btns.map((dataBtn, num) =>
						<ButtonNav key={num} dataBtn={dataBtn} numBtn={numBtn} />
					)}

					{isDownloadBtn ?
						<button
							className={styles.btnDownload}
							onClick={() => handleDowload()}
						>
							<AddCircleIcon color='primary' fontSize='small' />
							<p>Загрузить файл</p>
						</button>
						: <div className={styles.btnDownloadCopy}/>
					}
					{isProfile ?
						<button
							className={styles.btnDownload}
							onClick={() => handleDowload()}
						>
							<AddCircleIcon color='primary' fontSize='small' />
							<p>Добавить пользователя</p>
						</button>
						: <div className={styles.btnDownloadCopy}/>
					}
				</div>
				<button
					className={styles.btn}
					onClick={handleLogOut}
				>
					<div className={styles.icon}>
						<Door />
					</div>
					<p>Выход</p>
				</button>
			</div>
		</div>
	);
};

export default NavPanel;