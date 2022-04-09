import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

import { environment } from "@project/env/environment";
import { Character, Comic } from "@project/shared/models/common";

@Injectable()
export class DashboardService {
  private params: HttpParams = new HttpParams().append("apikey", environment.marvelKey);
  private baseUrl = "https://gateway.marvel.com/v1/public";

  constructor(private http: HttpClient) {
  }

  getComics(offset: number): Observable<Array<Comic> | never> {
    return this.http.get(`${ this.baseUrl }/comics`, { params: this.params.append("offset", (20 * offset) - 20) }).pipe(
      map((res: any) => res.data.results as Array<Comic>)
    );
  }

  getCharacters(offset: number): Observable<Array<Character> | never> {
    return this.http.get(`${ this.baseUrl }/characters`, { params: this.params.append("offset", (20 * offset) - 20) }).pipe(
      map((res: any) => res.data.results as Array<Character>)
    );
  }
}
