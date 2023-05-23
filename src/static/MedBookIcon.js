import React from 'react';

export default ({ width = 24, height = 24, color = '#bdbdbd' }) => {
	return (
		<svg width={width} height={height} viewBox="0 0 22 24" fill='none' xmlns="http://www.w3.org/2000/svg">
			<path
				d="M21.5 16.7993V1.19927C21.5 0.449268 21.05 -0.000732422 20.3 -0.000732422H5C2.45 -0.000732422 0.5 1.94927 0.5 4.49927V19.4993C0.5 22.0493 2.45 23.9993 5 23.9993H20.3C20.9 23.9993 21.5 23.5493 21.5 22.7993V22.0493C21.5 21.7493 21.35 21.4493 21.05 21.1493C20.9 20.3993 20.9 18.2993 21.05 17.6993C21.35 17.5493 21.5 17.2493 21.5 16.7993ZM7.25 7.87427C7.25 7.77481 7.28951 7.67943 7.35983 7.6091C7.43016 7.53878 7.52554 7.49927 7.625 7.49927H10.25V4.87427C10.25 4.77481 10.2895 4.67943 10.3598 4.6091C10.4302 4.53878 10.5255 4.49927 10.625 4.49927H12.875C12.9745 4.49927 13.0698 4.53878 13.1402 4.6091C13.2105 4.67943 13.25 4.77481 13.25 4.87427V7.49927H15.875C15.9745 7.49927 16.0698 7.53878 16.1402 7.6091C16.2105 7.67943 16.25 7.77481 16.25 7.87427V10.1243C16.25 10.2237 16.2105 10.3191 16.1402 10.3894C16.0698 10.4598 15.9745 10.4993 15.875 10.4993H13.25V13.1243C13.25 13.2237 13.2105 13.3191 13.1402 13.3894C13.0698 13.4598 12.9745 13.4993 12.875 13.4993H10.625C10.5255 13.4993 10.4302 13.4598 10.3598 13.3894C10.2895 13.3191 10.25 13.2237 10.25 13.1243V10.4993H7.625C7.52554 10.4993 7.43016 10.4598 7.35983 10.3894C7.28951 10.3191 7.25 10.2237 7.25 10.1243V7.87427ZM18.35 20.9993H5C4.1 20.9993 3.5 20.3993 3.5 19.4993C3.5 18.5993 4.25 17.9993 5 17.9993H18.35V20.9993Z"
				fill={color}
			/>
		</svg>
	);
};