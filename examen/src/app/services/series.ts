import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Series {
  private url = 'https://peticiones.online/api/series';

  constructor(private http: HttpClient) {}

  getSeries() {
    return this.http.get(this.url);
  }
  postSeries(series: any) {
    return this.http.post(this.url, series);
  }
}
