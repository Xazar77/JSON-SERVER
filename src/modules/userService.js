
export class UserService {
	constructor(url) {
		this.url = url
	}

	getUsers(){
		return fetch(this.url)
			.then(res => res.json())
	}

	addUser(user){
		return fetch(this.url, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				"Content-Type": "application/json"
			}

		}).then(res => res.json())
	}

	deleteUser(id) {
		return fetch(`${this.url}/${id}`, {
			method: 'DELETE'
		}).then(res => res.json())
	}

	choiseUser(id, data) {
		return fetch(`${this.url}/${id}`, {
			method: 'PATCH',
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(res => res.json())
	}

	getUser(id) {
		return fetch(`${this.url}/${id}`).then(res => res.json())
	}

	editUser(id, user) {
		return fetch(`${this.url}/${id}`, {
			method: 'PUT',
			body: JSON.stringify(user),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(res => res.json())
	}

	filterUsers(option) {
		return fetch(`${this.url}?${option}=true`).then(res => res.json())
	}

	sortUsers(sortOption) {
		return fetch(`${this.url}?_sort=${sortOption.name}&_order=${sortOption.value}`).then(res => res.json())
	}

	getSearchUsers(str) {
		return fetch(`${this.url}?name_like=${str}`).then(res => res.json())
	}
}