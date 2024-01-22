
import { render } from "./render"

export const deletUser = (id) => {

	const tableBody = document.getElementById('table-body')

	tableBody.addEventListener('click', (e) => {
		if(e.target.closest('.btn-remove')){
			const tr = e.target.closest('tr')
			const id = tr.dataset.key
			userService.deleteUser(id).then(() => {
				userService.getUsers().then(users => {
					render(users)
				})
			})
		}
	})
}



