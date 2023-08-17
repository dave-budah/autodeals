import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, shareReplay, tap, throwError} from "rxjs";
import {Role} from "./data/role";

@Injectable({
  providedIn: 'root'
})
export class RolesService {

 private rolesUrl = 'api/roles';

  constructor(private http: HttpClient,) { }

//   Get all roles
  roles$ = this.http.get<Role[]>(this.rolesUrl)
    .pipe(
      tap(data => console.log('Roles:', JSON.stringify(data))),
      shareReplay(1),
      catchError(this.handleError)
    )


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
