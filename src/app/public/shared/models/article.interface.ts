import {ProfileInterface} from "./profile.interface";
import {PopularTagsType} from "./popularTags.type";

export interface ArticleInterface {
  body: string
  title: string
  description: string
  slug: string
  tagList: PopularTagsType[]
  favouritesCount: number
  favorited: boolean
  createdAt: string
  updatedAt: string
  author: ProfileInterface
  /**
   * TODO: Add thumbnail
   */

}
