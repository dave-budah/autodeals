import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GetFeedResponseInterface} from "../../pages/explore/models/feedresponse.interface";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(private httpClient: HttpClient) { }

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fullUrl = environment.apiUrl + url
    return this.httpClient.get<GetFeedResponseInterface>(fullUrl)
  }
}
