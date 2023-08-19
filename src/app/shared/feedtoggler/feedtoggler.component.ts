import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectCurrentUser} from "../../auth/store/auth.reducers";

@Component({
  selector: 'feedtoggler',
  templateUrl: './feedtoggler.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedtogglerComponent {
  @Input() tagName?: string

  currentUser$ = this.store.select(selectCurrentUser)

  constructor(private store: Store) {
  }

}
