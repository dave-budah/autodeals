import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {feedActions} from "../store/feed.actions";

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent  implements OnInit {
  @Input() apiUrl: string = ''

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(feedActions.getFeed({url: this.apiUrl}))
  }

}
