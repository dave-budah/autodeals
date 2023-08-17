import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UsersService} from "./users.service";
import {User} from "./data/user";
import {BehaviorSubject, catchError, combineLatest, EMPTY, map, Observable, startWith, Subject} from "rxjs";
import {RolesService} from "./roles/roles.service";
import {Router} from "@angular/router";


@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  // The roleId that gets emitted onSelect
  private roleSelectedSubject = new BehaviorSubject<number>(0);
  roleSelectedAction$ = this.roleSelectedSubject.asObservable();

   users$ = combineLatest([
    this.userService.usersWithRoles$,
    this.roleSelectedAction$
  ])
    .pipe(
      map(([users, selectedRoleId]) =>
        users.filter(user =>
        selectedRoleId ? user.roleId === selectedRoleId : true
        )),
      catchError(err => {
        this.errorMessageSubject.next(err)
        return EMPTY;
      })
    );

  constructor(private userService: UsersService,
              private rolesService: RolesService,
              private route: Router) {}

  // Fetch all users adn their roles. This method ca be used when we don't want to include the filter function in our table.
  // users$ = this.userService.usersWithRoles$
  //   .pipe(
  //     catchError(err => {
  //       this.errorMessage = err;
  //       return EMPTY;
  //     })
  //   )

  // Fetch roles
  roles$ = this.rolesService.roles$
    .pipe(
     catchError(err => {
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    )

  ngOnInit(): void {}


  onSelected(roleId: number) {
    this.roleSelectedSubject.next(+roleId);
  }

  onView(userId: number) {
    this.userService.selectedUserChanged(userId)
    this.route.navigateByUrl('/dashboard/user/' + userId);
  }
}
