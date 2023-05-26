import React from 'react';

export default ({ width = 24, height = 24, color = '#FFFFFF' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 24 24" width={width}>
			<rect fill={color} height={height} width={width}/>
			<path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/>
		</svg>
	);
};