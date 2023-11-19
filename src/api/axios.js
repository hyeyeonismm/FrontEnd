import axios from 'axios';

const { REACT_APP_SERVER_PORT } = process.env;
console.log('REACT_APP_SERVER_PORT', REACT_APP_SERVER_PORT);

const baseURL = REACT_APP_SERVER_PORT;

const instance = axios.create({
	baseURL: baseURL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default instance;
