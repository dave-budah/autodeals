import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {PopularTagsType} from "../models/popularTags.type";
import {PopularTagsResponseInterface} from "../models/populartags.interface";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PopulartagsService {

  constructor(private httpClient: HttpClient) {}

  getPopularTags(): Observable<PopularTagsType[]>{
    const url = environment.apiUrl + '/tags'
    return this.httpClient.get<PopularTagsResponseInterface>(url).pipe(map((response) => response.tags))
  }
}
