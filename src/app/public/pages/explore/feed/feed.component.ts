import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {feedActions} from "../store/feed.actions";
import {selectError, selectFeedData, selectIsLoading} from "../store/feed.reducers";
import {combineLatest} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {ActivatedRoute, Params, Router} from "@angular/router";
import queryString from 'query-string'

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent  implements OnInit {
  @Input() apiUrl: string = 'articles'

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    feed: this.store.select(selectFeedData)
  })
  limit = environment.limit
  baseUrl = this.router.url.split('?')[0]
  currentPage: number = 0

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
   this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params['page'] || '1')
   })
    this.fetchFeed()
  }
  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit
    const parsedUrl = queryString.parseUrl(this.apiUrl)
    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
       this.store.dispatch(feedActions.getFeed({url: apiUrlWithParams }))
  }

}
