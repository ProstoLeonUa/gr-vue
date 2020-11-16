import { $login_post } from '@/helper/axios';
import { xml } from '@/helper/xml';
export default {
	state: {
		errorAuth: null
	},
	mutations: {
		errorMessage(state, data) {
			state.errorAuth = data.error
		}
	},
	getters: {
		errorMessage(state) {
			return state.errorAuth
		}
	},
	actions: {
		async 'post-sing'({ commit, getters }, payload) {
			try {
				const user = xml(payload);
				const response = await $login_post('http://localhost:8080/form/auth', user)
				if (response.status === 200) localStorage.token = response.data.success;

			} catch (e) {
				commit('errorMessage', e.response.data)
				throw Error(e)
			}
		}
	}
}