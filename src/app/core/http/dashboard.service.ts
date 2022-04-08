import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { environment } from "@project/env/environment";

@Injectable()
export class DashboardService {
  private baseUrl = "https://gateway.marvel.com:443/v1/public";

  constructor(private http: HttpClient) {
  }

  getComics(): Observable<any | never> {
    return this.http.get(`${ this.baseUrl }/comics`, { params: new HttpParams().append("apikey", environment.marvelKey) }).pipe(tap(x => {

      console.warn(x);
    }));
  }

  getCharacters(): Observable<any | never> {
    return this.http.get(`${ this.baseUrl }/comics`, { params: new HttpParams().append("apikey", environment.marvelKey) });
  }
}
