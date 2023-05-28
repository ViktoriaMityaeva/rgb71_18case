import authState from '../store/authState';

export const apiPost = async (url = '', parameters = {}) => {
	const serverData = {
		ans: { status: null, statusText: '' },
		error: { isError: false, errorText: '' },
	};

	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(parameters),
	};

	try {
		const answer = await fetch(url, options);

		const { status, statusText } = answer;
		const { ans } = serverData;
		serverData.ans = { ...ans, status, statusText };

	} catch (error) {
		serverData.error = { isError: true, errorText: error.message };
	}

	return serverData;
};

export const apiAuthPost = async (url = '', values) => {
	const serverData = {
		ans: { status: null, statusText: ''},
		error: { isError: false, errorText: '' },
		data: [],
	};

	try {
		const options = {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const userData = await fetch(url, options);

		serverData.data = await userData.json();
	} catch (error) {
		serverData.error.isError = true;
		serverData.error.errorText = error;
	}

	return serverData;
};
export const apiMainGet = async (url = '') => {
	const serverData = {
		ans: { status: null, statusText: '' },
		error: { isError: false, errorText: '' },
		data: [],
	};
	const token = authState.token;

	const options = {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`,
		},
		mode: 'cors',
	};

	try {
		const answer = await fetch(url, options);

		const { status, statusText } = answer;
		const { ans } = serverData;

		serverData.ans = { ...ans, status, statusText };

		serverData.data = await answer.json();
	} catch (error) {
		serverData.error = { isError: true, errorText: error.message };
	}

	return serverData;
};