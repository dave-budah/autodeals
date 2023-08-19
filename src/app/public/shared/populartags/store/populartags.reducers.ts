import {FeedStateInterface} from "../../../pages/explore/models/feedstate.interface";
import {createFeature, createReducer, on} from "@ngrx/store";
import {feedActions} from "../../../pages/explore/store/feed.actions";
import {routerNavigatedAction} from "@ngrx/router-store";
import {PopularTagsStateInterface} from "../../models/populartagsState.interface";
import {popularTagsActions} from "./populartags.actions";

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  error: null,
  data: null
}
const popularTagsFeature = createFeature({
  name: 'popularTags',
  reducer: createReducer(
    initialState,
    on(popularTagsActions.getPopularTags, (state) => ({...state, isLoading: true})),
    on(popularTagsActions.getPopularTagsSuccess, (state, action) => ({...state, isLoading: false, data: action.popularTags})),
    on(popularTagsActions.getPopularTagsFailure, (state) => ({...state, isLoading: false})),
  )
})

export const {
  name: popularTagsFeatureKey,
  reducer: popularTagsReducer,
  selectIsLoading,
  selectError,
  selectData: selectPopularTagsData
} = popularTagsFeature
