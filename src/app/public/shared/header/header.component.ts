import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {navbarData} from "./data";
import {selectCurrentUser} from "../../../auth/store/auth.reducers";
import {Store} from "@ngrx/store";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  navData = navbarData;

  data$ = combineLatest({
     currentUser: this.store.select(selectCurrentUser)
  })
  constructor(private store: Store) {}

}
