import axios from 'axios';
export const $login_post = async function (url, payload) {
	const option = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			'Content-Type': 'application/json;charset=UTF-8'
		}
	}
	const response = await axios.post(url, payload, option);
	return response;
}

