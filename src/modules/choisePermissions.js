import { render } from "./render"

export const choisePermissions = (id) => {
	const tableBody = document.getElementById('table-body')
	
	tableBody.addEventListener('click', (e) => {
		if(e.target.closest('input[type=checkbox]')){
			const tr = e.target.closest('tr')
			const input = tr.querySelector('input[type=checkbox]')
			const id = tr.dataset.key
			userService.choiseUser(id, {
				permissions: input.checked
			}).then(() => {
				userService.getUsers().then(users => {
					render(users)
				})
			})
		}
	})
}
