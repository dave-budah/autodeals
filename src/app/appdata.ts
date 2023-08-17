import {InMemoryDbService} from "angular-in-memory-web-api";
import {User} from "./dashboard/users/data/user";
import {UserData} from "./dashboard/users/data/data";
import {Role} from "./dashboard/users/roles/data/role";
import {RoleData} from "./dashboard/users/roles/data/data";
import {MakesData} from "./dashboard/categories/makes/data/data";
import {CarMake} from "./dashboard/categories/makes/data/carmake";
import {CarModel} from "./dashboard/categories/models/data/carmodel";
import {ModelData} from "./dashboard/categories/models/data/data";

export class Appdata implements InMemoryDbService {
   createDb(): { users: User[], roles: Role[], carmakes: CarMake[], carmodels: CarModel[]} {
      const users = UserData.users
      const roles = RoleData.roles
      const carmakes = MakesData.carmakes
      const carmodels = ModelData.carmodels
    return {users, roles, carmakes, carmodels};
  }
}
