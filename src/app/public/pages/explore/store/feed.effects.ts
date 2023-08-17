import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {catchError, map, of, switchMap} from "rxjs";
import {FeedService} from "../../../shared/services/feed.service";
import {feedActions} from "./feed.actions";
import {GetFeedResponseInterface} from "../models/feedresponse.interface";

export const getFeedEffect = createEffect((
  actions$ = inject(Actions),
  feedService = inject(FeedService),
) => {
    return actions$.pipe(
      ofType(feedActions.getFeed),
      switchMap(({url}) => {
        return feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return feedActions.getFeedSuccess({feed})
          }),
          catchError(() => {
            return of(feedActions.getFeedFailure())
          })
        )
      })
    )
},
  {functional: true})
