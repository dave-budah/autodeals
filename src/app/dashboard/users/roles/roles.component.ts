import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RolesService} from "./roles.service";
import {UsersService} from "../users.service";
import {catchError, EMPTY, Subject} from "rxjs";

@Component({
  selector: 'roles',
  templateUrl: './roles.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RolesComponent implements OnInit {

  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();
  constructor(private roleService: RolesService) {}


  roles$ = this.roleService.roles$
    .pipe(
      catchError(err => {
       this.errorMessageSubject.next(err)
        return EMPTY;
      })
    )
  ngOnInit(): void {
  }

}
