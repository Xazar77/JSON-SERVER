// export const first = (service) => {
	// service.logger()
// }
export const render = (users) => {
 
// window.userService.logger()     // или , по скольку мы обращаемся к глобальному обЪекту window, можем записать
// userService.logger()

	const tableBody = document.getElementById('table-body')
	tableBody.innerHTML = ''
	users.forEach((user, idx) => {
		const {id, name, email, children, permissions} = user
		tableBody.insertAdjacentHTML('beforeend', `
		<tr data-key='${id}' >
			<th scope="row">${idx + 1}</th>
			<td>${name}</td>
			<td>${email}</td>
			<td>${children? 'есть': 'нет'}</td>
			<td>
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" role="switch"
						id="form-children" ${permissions? 'checked': null}>
				</div>
			</td>
			<td>
				<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
					<button type="button" class="btn btn-warning btn-edit">
						<i class="bi-pencil-square"></i>
					</button>
					<button type="button" class="btn btn-danger btn-remove">
						<i class="bi-person-x"></i>
					</button>
				</div>
			</td>
		</tr>
		`)
	})


}