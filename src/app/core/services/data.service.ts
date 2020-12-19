import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Job } from '../../shared/interfaces/job.model';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { catchError, map, retry } from 'rxjs/operators';
import { HandleHttpResponseError } from '../../shared/utils/handleHttpResponseError/httpErrorHandler';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  api = environment.API_URL;

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job> {
    return this.http.get(`${this.api}/jobs`).pipe(
      retry(3),
      catchError(HandleHttpResponseError),
      map((response: any) => {
        return response;
      })
    );
  }
}
