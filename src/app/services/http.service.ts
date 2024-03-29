import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  api_url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  get<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(this.api_url + path);
  } 

  post<T>(path: string, body: object): Observable<T> {
    return this.httpClient.post<T>(this.api_url + path, body);
  }

  postFormData<T>(path: string, body: object): Observable<T> {
    const headers = new HttpHeaders({
      "Content-Type": "multipart/form-data"
    });

    return this.httpClient.post<T>(this.api_url + path, body, {headers: headers});
  } 

  put<T>(path: string, body: object): Observable<T> {
    return this.httpClient.put<T>(this.api_url + path, body);
  }

  delete<T>(path: string): Observable<T> {
    return this.httpClient.delete<T>(this.api_url + path);
  }
}
