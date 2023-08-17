import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterRequestInterface} from "../models/registerRequestInterface";
import {map, Observable} from "rxjs";
import {CurrentUserInterface} from "../../shared/currentuser.interface";
import {AuthResponseInterface} from "../models/authresponse.interface";
import {environment} from "../../../environments/environment";
import {LoginRequestInterface} from "../models/loginRequestInterface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // Signup
  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'
    return this.http.post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  // Login
  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login'
    return this.http.post<AuthResponseInterface>(url, data)
     .pipe(map(this.getUser))
  }

  // Get Current User
  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user'
    return this.http.get<AuthResponseInterface>(url)
     .pipe(map(this.getUser))
  }

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }
}
