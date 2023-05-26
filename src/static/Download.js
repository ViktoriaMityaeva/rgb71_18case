import React from 'react';

export default ({ width = 24, height = 24, color = '#bdbdbd' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 24 24" width={width}>
			<g>
				<rect fill='none' height={height} width={width}/>
			</g>
			<g>
				<path fill={color} d="M5,20h14v-2H5V20z M19,9h-4V3H9v6H5l7,7L19,9z"/>
			</g>
		</svg>
	);
};