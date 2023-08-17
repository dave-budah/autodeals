import {createFeature, createReducer, on} from "@ngrx/store";
import {AuthStateInterface} from "../models/authstate.interface";
import {authActions} from "./auth.actions";
import {routerNavigatedAction} from "@ngrx/router-store";
import {state} from "@angular/animations";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: undefined,
  validationErrors: null
}

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.registerSuccess, (state, action) => ({...state, isSubmitting: true, validationErrors: null})),
    on(authActions.registerSuccess, (state, action) => ({...state, isSubmitting: false, currentUser: action.currentUser,})),
    on(authActions.registerFailure, (state, action) => ({...state, isSubmitting: false, validationErrors: action.errors,})),

    // Login reducer
    on(authActions.loginSuccess, (state, action) => ({...state, isSubmitting: true, validationErrors: null})),
    on(authActions.loginSuccess, (state, action) => ({...state, isSubmitting: false, currentUser: action.currentUser,})),
    on(authActions.loginFailure, (state, action) => ({...state, isSubmitting: false, validationErrors: action.errors,})),
    on(routerNavigatedAction, (state) => ({ ...state, validationErrors: null})),

    // Get Current User
    on(authActions.getCurrentUser, (state, action) => ({...state, isLoading: true})),
    on(authActions.getCurrentUserSuccess, (state, action) => ({...state, isLoading: false, currentUser: action.currentUser})),
    on(authActions.getCurrentUserFailure, (state) => ({...state, isLoading: false, currentUser: null})),
    on(routerNavigatedAction, (state) => ({ ...state, validationErrors: null}))
  )
})

export const { name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectCurrentUser,
  selectValidationErrors} = authFeature
