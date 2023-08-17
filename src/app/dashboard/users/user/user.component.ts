import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UsersService} from "../users.service";
import {catchError, EMPTY, Subject} from "rxjs";

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
private errorMessageSubject = new Subject<string>();
errorMessage$ = this.errorMessageSubject.asObservable();

  user$ = this.usersService.selectedUser$
    .pipe(
      catchError(err => {
        this.errorMessageSubject.next(err)
        return EMPTY;
      })
    )

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
  }

}
