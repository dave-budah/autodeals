import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterRequestInterface} from "../models/registerRequestInterface";
import {map, Observable} from "rxjs";
import {CurrentUserInterface} from "../../shared/currentuser.interface";
import {AuthResponseInterface} from "../models/authresponse.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'
    return this.http.post<AuthResponseInterface>(url, data).pipe(map((response) => response.user))
  }
}
