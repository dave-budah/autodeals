import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {
  BehaviorSubject,
  catchError,
  filter,
  forkJoin,
  Observable,
  of,
  shareReplay,
  switchMap,
  tap,
  throwError
} from "rxjs";
import {CarMake} from "./data/carmake";
import {CarmodelsService} from "../models/carmodels.service";

@Injectable({
  providedIn: 'root'
})
export class MakesService {
  private makesUrl = 'api/carmakes';
  private carmakeSelectedSubject$ = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient,
              private modelsService: CarmodelsService) { }

  //   Get all car makes
  carmakes$ = this.http.get<CarMake[]>(this.makesUrl)
    .pipe(
    //  tap(data => console.log('Carmakes:', JSON.stringify(data))),
      shareReplay(1),
      catchError(this.handleError)
    )

  // selectedCarMakeModels$ = this.carmakeSelectedSubject$
  //   .pipe(
  //       filter(carmake => Boolean(carmake)),
  //     switchMap(selectedCarMake => {
  //       if (selectedCarMake?.carmodelIds) {
  //         return forkJoin(selectedCarMake.carmodelIds.map(carmodelId =>
  //           this.http.get<CarMake>(`${this.makesUrl}/${carmodelId}`)))
  //       } else {
  //         return of([]);
  //       }
  //     }),
  //     tap(carmakes => console.log('carmake models', JSON.stringify(carmakes)))
  //   )

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
