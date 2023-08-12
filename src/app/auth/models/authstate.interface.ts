import {CurrentUserInterface} from "../../shared/currentuser.interface";
import {BackendErrorsInterface} from "../../shared/backenderrors.interface";

export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser: CurrentUserInterface | null | undefined
  isLoading: boolean
  validationErrors: BackendErrorsInterface | null
}
