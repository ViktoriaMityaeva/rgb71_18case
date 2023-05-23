import React from 'react';

export default ({ width = 24, height = 24, color = '#bdbdbd' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 24 24" width={width}>
			<path d="M0 0h24v24H0z" fill="none"/>
			<path
				d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"
				fill={color}
			/>
		</svg>
	);
};