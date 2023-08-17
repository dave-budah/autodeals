export interface User {
  id: number,
  firstname: string,
  lastname: string,
  avatar?: string,
  email: string,
  address: string,
  mobileNumber?: string,
  title?: string,
  status: string,
  roleId?: number,
  role?: string,
  organisationIds?: number[]
}
