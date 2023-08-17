import {GetFeedResponseInterface} from "./feedresponse.interface";

export interface FeedStateInterface {
  isLoading: boolean
  error: string | null
  data: GetFeedResponseInterface | null
}
