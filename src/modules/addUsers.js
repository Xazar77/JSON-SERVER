import { render } from "./render"
export const addUsers =() => {
	const form = document.querySelector('form')
	const nameUser = form.querySelector('#form-name')
	const emailUser = form.querySelector('#form-email')
	const inputChildren = form.querySelector('#form-children')


	form.addEventListener('submit', (e) => {
		e.preventDefault()

		if(!form.dataset.method) {

			const user ={
				name: nameUser.value,
				email: emailUser.value,
				children: inputChildren.checked,
				permissions: false
			}
			userService.addUser(user).then(() => {
				userService.getUsers().then(users => {
					render(users)
					form.reset()
				})
			})
		}
		
	})
}