import { render } from "./modules/render";
import { UserService } from "./modules/userService";
import { addUsers } from "./modules/addUsers";
import { deletUser } from "./modules/deletUser";
import { choisePermissions } from "./modules/choisePermissions";
import { editUsers } from "./modules/editUsers";
import { filterUsers } from "./modules/filterUsers";
import { sortUsers } from "./modules/sortUsers";
import { searchUsers } from "./modules/searchUsers";


// const userService = new UserService   /*Чтобы не передавать в каждый модуль экземпляр класса, мы создаём экземпляр класса для обЪекта window, который будет виден для всех модулей*/
// window.userService = userService

window.userService = new UserService('http://localhost:4545/users')

userService.getUsers().then(data => {
	render(data)

})
addUsers()
deletUser()
choisePermissions()
editUsers()
filterUsers()
sortUsers()
searchUsers()