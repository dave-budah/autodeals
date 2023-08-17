import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {catchError, EMPTY, Subject} from "rxjs";
import {MakesService} from "./makes.service";

@Component({
  selector: 'app-makes',
  templateUrl: './makes.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MakesComponent implements OnInit {

   private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  constructor(private makesService: MakesService) {}
   carmakes$ = this.makesService.carmakes$
    .pipe(
      catchError(err => {
       this.errorMessageSubject.next(err)
        return EMPTY;
      })
    )

  ngOnInit(): void {
  }

}
