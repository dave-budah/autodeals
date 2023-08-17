import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {RegisterRequestInterface} from "../models/registerRequestInterface";
import {selectIsSubmitting, selectValidationErrors} from "../store/auth.reducers";
import {AuthService} from "../services/auth.service";
import {authActions} from "../store/auth.actions";
import {combineLatest} from "rxjs";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {
  registerForm!: UntypedFormGroup;
  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors)
  })
  constructor(private _formBuilder: UntypedFormBuilder,
                private store: Store,
              private authService: AuthService) {
    }

    ngOnInit(): void {
          this.registerForm = this._formBuilder.group({
            username: ['', [ Validators.required, Validators.minLength(3)]],
            email: ['', [ Validators.required, Validators.pattern(this.emailRegex)]],
            password: ['', [ Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
        },
            {
        validators:this.PasswordMatch('password', 'confirmPassword')
        })
    }


  //   Get formControlName for validation
  getControl(name: any): AbstractControl | null {
    return this.registerForm!.get(name);
  }
  //   Custom password match validation
  PasswordMatch(password: any, confirmPassword: any) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const conformPasswordControl = formGroup.controls[confirmPassword];

      if (conformPasswordControl.errors && !conformPasswordControl.errors['PasswordMatch']){
        return;
      }
      if (passwordControl.value !== conformPasswordControl.value) {
        conformPasswordControl.setErrors({ PasswordMatch : true});
      } else {
        conformPasswordControl.setErrors(null);
      }
    }
  }

  // Submit form data to api
  onSubmit() {
      console.log('form', this.registerForm.getRawValue());
      const request: RegisterRequestInterface = {
        user: this.registerForm.getRawValue()
      }
       this.store.dispatch(authActions.register({request}))
  }
}
