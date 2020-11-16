export const xml = function ({ login, password }) {
	return `<?xml version='1.0' encoding='UTF-8'?><auth><login>${login}</login><password>${password}</password></auth>`
}
