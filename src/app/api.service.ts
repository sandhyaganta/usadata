import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private getUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get(this.getUrl);
  }
}
