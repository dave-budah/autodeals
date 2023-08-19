import {PopularTagsType} from "./popularTags.type";

export interface PopularTagsStateInterface {
  isLoading: boolean
  error: string | null
  data: PopularTagsType[] | null
}
