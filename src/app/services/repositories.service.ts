import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {domain} from './domain.config';
import {ISearchResult} from '../models/repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  constructor(
    private http: HttpClient,
  ) {}

  search(q: string): Observable<ISearchResult> {
    const params = new HttpParams({fromObject: {q}});
    return this.http.get<ISearchResult>(`${domain}/search/repositories`, {params});
  }
}
