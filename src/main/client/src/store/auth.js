import { $login_post } from '@/helper/axios';
import { xml } from '@/helper/xml';
export default {
	state: {
		notification: null
	},
	mutations: {
		notificationMessage(state, data) {
			state.notification = data.error
		}
	},
	getters: {
		notificationMessage(state) {
			return state.notification
		}
	},
	actions: {
		async 'auth'({ commit }, payload) {
			try {
				const user = xml(payload);
				const response = await $login_post('http://localhost:8080/auth/auth', user)
				if (response.status === 200) localStorage.token = response.data.success;
			} catch (e) {
				commit('notificationMessage', e.response.data)
				throw Error(e)
			}
		}
	}
}