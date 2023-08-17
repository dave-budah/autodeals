import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {LoginRequestInterface} from "../models/loginRequestInterface";
import {authActions} from "../store/auth.actions";
import {Store} from "@ngrx/store";
import {combineLatest} from "rxjs";
import {selectIsSubmitting, selectValidationErrors} from "../store/auth.reducers";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

   data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors)
  })
  constructor(private _formBuilder: UntypedFormBuilder,
              private store: Store,) {
  }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [ Validators.required, Validators.pattern(this.emailRegex)]],
      password: ['', [ Validators.required, Validators.minLength(6)]],
    })
  }

   //   Get formControlName for validation
  getControl(name: any): AbstractControl | null {
    return this.loginForm!.get(name);
  }

  protected readonly onsubmit = onsubmit;

  // Submit form data to api
  onSubmit() {
      console.log('form', this.loginForm.getRawValue());
      const request: LoginRequestInterface = {
        user: this.loginForm.getRawValue()
      }
       this.store.dispatch(authActions.login({request}))
  }
}
