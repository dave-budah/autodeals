import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CarModel} from "./data/carmodel";
import {catchError, concatMap, map, mergeMap, Observable, of, shareReplay, switchMap, tap, throwError} from "rxjs";
import {ModelData} from "./data/data";

@Injectable({
  providedIn: 'root'
})
export class CarmodelsService {
  private modelsUrl = 'api/carmodels';

  carmodels$ = this.http.get<CarModel[]>(this.modelsUrl)
    .pipe(
      tap(data => console.log('carmodels', JSON.stringify(data))),
      shareReplay(1),
      catchError(this.handleError)
    )

  // Get model IDs
  modelsWithMap$ = of(1, 3, 5)
    .pipe(
      map(id => this.http.get<CarModel>(`${this.modelsUrl}/${id}`))
    )

  modelsWithConcatMap$ = of(2,4,6)
    .pipe(
      tap(id => console.log('concatMap source Observable', id)),
      concatMap(id => this.http.get<CarModel>(`${this.modelsUrl}/${id}`))
    )

  modelsWithMergeMap$ = of(2,4,6)
    .pipe(
      tap(id => console.log('mergeMap source Observable', id)),
      mergeMap(id => this.http.get<CarModel>(`${this.modelsUrl}/${id}`))
    )

   modelsWithSwitchMap$ = of(2,4,6)
    .pipe(
      tap(id => console.log('switchMap source Observable', id)),
      switchMap(id => this.http.get<CarModel>(`${this.modelsUrl}/${id}`))
    )
   constructor(private http: HttpClient) {
    // this.modelsWithConcatMap$.subscribe(item => console.log('concatMap result', item))
    // this.modelsWithMergeMap$.subscribe(item => console.log('mergeMap result', item))
    // this.modelsWithSwitchMap$.subscribe(item => console.log('mergeMap result', item))
    // this.modelsWithMap$.subscribe( o => o.subscribe(
    //   item => console.log('map result', item)
    // ))
   }


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
