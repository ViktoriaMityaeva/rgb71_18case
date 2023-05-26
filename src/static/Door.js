import React from 'react';

export default ({ width = 24, height = 24, color = '#bdbdbd' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 24 24" width={width}>
			<path d="M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z" fill={color}/>
		</svg>
	);
};