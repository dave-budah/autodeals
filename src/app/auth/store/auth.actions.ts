import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {RegisterRequestInterface} from "../models/registerRequestInterface";
import {CurrentUserInterface} from "../../shared/currentuser.interface";
import {BackendErrorsInterface} from "../../shared/backenderrors.interface";
import {LoginRequestInterface} from "../models/loginRequestInterface";

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register success': props<{currentUser: CurrentUserInterface}>(),
    'Register failure': props<{errors: BackendErrorsInterface}>(),

     Login: props<{ request: LoginRequestInterface }>(),
    'Login success': props<{currentUser: CurrentUserInterface}>(),
    'Login failure': props<{errors: BackendErrorsInterface}>(),

    'Get current user': emptyProps(),
    'Get current user success': props<{currentUser: CurrentUserInterface}>(),
    'Get current user failure': emptyProps(),
  }
})
