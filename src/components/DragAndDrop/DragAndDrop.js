import styles from './DragAndDrop.module.scss';
import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['XLSX', 'XLS', 'PDF'];

function DragDrop() {
	const [file, setFile] = useState(null);

	const handleChange = (file) => {
		setFile(file);
		handleUpdate(file);
	};
	const handleUpdate = (file) => {
		console.log(file);
	};
	return (
		<div className={styles.container}>
			<div className={styles.dropContainer}>
					<FileUploader
						maxSize={2}
						multiple={true}
						handleChange={handleChange}
						name='file'
						types={fileTypes}
						children
						label='Нажмите сюда или перетащите файлы'
					/>
			</div>
			<p>{file ? `Имя файла: ${file[0].name}` : 'Перетащите файлы или нажмите на окно выше'}</p>
		</div>
	);
}

export default DragDrop;