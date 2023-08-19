import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {catchError, map, of, switchMap} from "rxjs";
import {PopulartagsService} from "../populartags.service";
import {popularTagsActions} from "./populartags.actions";
import {PopularTagsType} from "../../models/popularTags.type";

export const getPopularTagsEffect = createEffect((
  actions$ = inject(Actions),
  populartagsService = inject(PopulartagsService),
) => {
    return actions$.pipe(
      ofType(popularTagsActions.getPopularTags),
      switchMap(() => {
        return populartagsService.getPopularTags().pipe(
          map((popularTags: PopularTagsType[]) => {
            return popularTagsActions.getPopularTagsSuccess({popularTags})
          }),
          catchError(() => {
            return of(popularTagsActions.getPopularTagsFailure())
          })
        )
      })
    )
},
  {functional: true})
