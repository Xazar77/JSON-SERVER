import { render } from "./render"
export const editUsers = () => {
	const form = document.querySelector('form')
	const nameUser = form.querySelector('#form-name')
	const emailUser = form.querySelector('#form-email')
	const inputChildren = form.querySelector('#form-children')

	const tableBody = document.getElementById('table-body')
	
	tableBody.addEventListener('click', (e) => {
		if(e.target.closest('.btn-edit')){
			const tr = e.target.closest('tr')
			const id = tr.dataset.key
			console.log(id)
			userService.getUser(id).then(user => {
				const {name, email, children} = user
				nameUser.value = name
				emailUser.value = email
				inputChildren.checked = children

				form.dataset.method = id

			})
		}
	})

	form.addEventListener('submit', (e) => {
		e.preventDefault()

		if(form.dataset.method) {
			const id = form.dataset.method

			const user ={
				name: nameUser.value,
				email: emailUser.value,
				children: inputChildren.checked,
				permissions: false
			}
			
			userService.editUser(id, user).then(() => {
				userService.getUsers().then(users => {
					render(users)
					form.reset()
					form.removeAttribute('data-method')
				})
			})
		}
		
	})
	
}