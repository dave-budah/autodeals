import {Role} from "./role";

export class RoleData {
  static roles: Role[] = [
    {
      id: 1,
      name: 'superadmin',
      description: 'Take the roles of a Super Administrator',
    },
     {
      id: 2,
      name: 'admin',
      description: 'Take the roles of an Administrator',
    },
     {
      id: 3,
      name: 'manager',
      description: 'Take the roles of a Manager',
    },
     {
      id: 4,
      name: 'companyrep',
      description: 'Take the roles of a company or organisation representative',
    },
    ]
}
