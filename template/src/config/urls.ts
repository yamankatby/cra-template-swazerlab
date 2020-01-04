import axios from 'axios';

export const updateDefaultHeaders = (accessToken = '') => {
	axios.defaults.headers.common['Content-Type'] = 'application/json';
	axios.defaults.headers.common['Accept'] = 'application/json';
	axios.defaults.headers.common.Authorization = 'bearer '.concat(accessToken);
	axios.defaults.withCredentials = true;
};

export const rootURL = 'https://swazerlab.com/api/';
