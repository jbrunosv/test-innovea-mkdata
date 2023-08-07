import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Pesquisa } from '../models/pesquisa';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  url = 'https://newsapi.org/v2/everything';
  apiKey = "2d63018100ad417bb69e31060f250ee3";

  constructor(private httpClient: HttpClient) { }

  getAll(findValue: string, pageSize: number, page: number): Observable<Pesquisa>{
    const params = new HttpParams()
    .set("q", findValue)
    .set("pageSize", pageSize)
    .set("page", page)
    .set("apiKey", this.apiKey)

    return this.httpClient.get<Pesquisa>(`${this.url}?${params.toString()}` );
  }
}
