import secrets from '../secrets';
import qs from 'qs';
import axios from 'axios';

const ROOT_URL = 'https://api.imgur.com';

export default {
	login() {
		const queryStr = {
			client_id: secrets.ImgurApiKeys.ClientId,
			response_type: 'token'
		};

		window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryStr)}`;
	},
	fetchImages(token) {
		return axios.get(`${ROOT_URL}/3/account/me/images`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
	},
}
