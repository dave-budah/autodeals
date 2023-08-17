import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "./data/user";
import {BehaviorSubject, catchError, combineLatest, map, Observable, shareReplay, tap, throwError} from "rxjs";
import {RolesService} from "./roles/roles.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = 'api/users';

  constructor(private http: HttpClient,
              private rolesService: RolesService) { }

//   Get all users
  users$ = this.http.get<User[]>(this.usersUrl)
    .pipe(
      tap(data => console.log('Users:', JSON.stringify(data))),
      catchError(this.handleError)
    )

  // Users with their roles logic
  usersWithRoles$ = combineLatest([
    this.users$,
    this.rolesService.roles$
  ]).pipe(
    map(([users, roles]) =>
    users.map(user => ({
    ...user,
    role: roles.find(r => user.roleId === r.id)?.name,
} as User))
  ),
    shareReplay(1),
)

//  Selected user function
  private userSelectedSubject = new BehaviorSubject<number>(0);
  userSelectedAction$ = this.userSelectedSubject.asObservable();
  selectedUser$ = combineLatest([
    this.usersWithRoles$,
    this.userSelectedAction$
  ]).pipe(
    map(([users, selectedUserId]) =>
      users.find(user => user.id === selectedUserId)
    ),
    tap(user => console.log('selectedUser', user)),
     shareReplay(1),
  )
 // Emit the selected User ID
  selectedUserChanged(selectedUserId: number) {
    this.userSelectedSubject.next(selectedUserId);
  }


// Error handling functon
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
}
