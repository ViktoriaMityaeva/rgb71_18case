// import { useState, useRef } from 'react';
import styles from './DragAndDrop.module.scss';
//
// const DragAndDrop = () => {
// 	const [files, setFiles] = useState(null);
// 	const inputRef = useRef();
//
// 	const handleDragOver = (event) => {
// 		event.preventDefault();
// 	};
//
// 	const handleDrop = (event) => {
// 		event.preventDefault();
// 		setFiles(event.dataTransfer.files);
// 	};
//
// 	// send files to the server // learn from my other video
// 	const handleUpload = () => {
// 		// const formData = new FormData();
// 		// fetch('https://httpbin.org/post', {
// 		// 	method: 'POST',
// 		// 	body: file,
// 		// 	// 👇 Set headers manually for single file upload
// 		// 	headers: {
// 		// 		'content-type': file.type,
// 		// 		'content-length': `${file.size}`, // 👈 Headers need to be a string
// 		// 	},
// 		// })
// 		// 	.then((res) => res.json())
// 		// 	.then((data) => console.log(data))
// 		// 	.catch((err) => console.error(err));
// 	};
//
// 	if (files) return (
// 		<div className={styles.upload}>
// 			<ul>
// 				{Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
// 			</ul>
// 			<div className={styles.actions}>
// 				<button onClick={() => setFiles(null)}>Cancel</button>
// 				<button onClick={handleUpload}>Upload</button>
// 			</div>
// 		</div>
// 	);
//
// 	return (
// 		<>
// 			<div
// 				className={styles.dropzone}
// 				onDragOver={handleDragOver}
// 				onDrop={handleDrop}
// 			>
// 				<h1>Drag and Drop Files to Upload</h1>
// 				<h1>Or</h1>
// 				<input
// 					type='file'
// 					multiple
// 					onChange={(event) => setFiles(event.target.files)}
// 					hidden
// 					accept='image/png, image/jpeg'
// 					ref={inputRef}
// 				/>
// 				<button onClick={() => inputRef.current.click()}>Select Files</button>
// 			</div>
// 		</>
// 	);
// };
// export default DragAndDrop;
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
		<div
			className={styles.container}
		>
			<div
				className={styles.dropContainer}
				// style={{background: 'red'}}
			>
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