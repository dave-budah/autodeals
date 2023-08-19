import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {PopularTagsType} from "../../models/popularTags.type";

export const popularTagsActions = createActionGroup({
  source: 'popular tags',
  events: {
    'Get popular tags': emptyProps(),
    'Get popular tags success': props<{popularTags: PopularTagsType[]}>(),
    'Get popular tags failure': emptyProps(),
  }
})
