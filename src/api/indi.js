import axios from 'axios';

const indiInstance = axios.create({
	baseURL: process.env.REACT_APP_INDI_SERVER_PORT,
	headers: {
		'Content-Type': 'application/json',
	},
});
export default indiInstance;
