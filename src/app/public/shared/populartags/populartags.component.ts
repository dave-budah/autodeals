import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {popularTagsActions} from "./store/populartags.actions";
import {selectError, selectIsLoading, selectPopularTagsData} from "./store/populartags.reducers";
import {combineLatest} from "rxjs";

@Component({
  selector: 'populartags',
  templateUrl: './populartags.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopulartagsComponent implements OnInit {
  data$ = combineLatest({
    popularTags: this.store.select(selectPopularTagsData),
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError)
  })
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(popularTagsActions.getPopularTags())
  }

}
