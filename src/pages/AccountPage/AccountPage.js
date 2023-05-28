import React/*, {useEffect, useState}*/ from 'react';
import NavPanel from '../../components/NavPanel/NavPanel';
import Account from '../../components/Account/Account';
// import {apiMainGet} from '../../api/allApi';
// import authState from '../../store/authState';
// import connectsState from '../../store/connectsState';



export default () => {
	// const { linkGetUser } = connectsState;
	// const [isLoad, setLoad] = useState(true);

	// useEffect(() => {
	// 	getUserData(linkGetUser);
	// }, [isLoad]);
	//
	// const getUserData = (url) => {
	// 	apiMainGet(url).then(({data}) => {
	// 		authState.setUserData(data);
	// 		setLoad(false);
	// 		console.log(data);
	// 	});
	// };
	// const test = () => {
	// 	apiMainGet(linkGetUser).then(({ data }) =>
	// 		console.log(data, authState.token)
	// 	);
	// };
	return (
		<div>
			<NavPanel numBtn={0} isDownloadBtn={false}/>
			<Account/>
		</div>
	);
};
