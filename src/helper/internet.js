import { getOption } from './collection';
import { URL_BASE } from './constant';
import axios from 'axios';

export const makeRequest = (endpoint, method = null, token = null, data = null) => {
	const url = URL_BASE + endpoint;
	const options = getOption(url, method, token, data);

	return new Promise((resolve, reject) => {
		axios(options)
			.then((res) => {
				resolve({ error: null, res: res });
			})
			.catch((err) => {
				reject({ error: err, res: null });
			});
	});
}
