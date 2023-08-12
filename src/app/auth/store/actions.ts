import { createActionGroup, props} from "@ngrx/store";
import {RegisterRequestInterface} from "../models/registerRequestInterface";
import {CurrentUserInterface} from "../../shared/currentuser.interface";
import {BackendErrorsInterface} from "../../shared/backenderrors.interface";

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register success': props<{currentUser: CurrentUserInterface}>(),
    'Register failure': props<{errors: BackendErrorsInterface}>(),
  }
})
