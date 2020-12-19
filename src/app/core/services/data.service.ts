import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Job } from '../../shared/interfaces/job.model';
import { Category } from '../../shared/interfaces/category.model';
import { Country } from '../../shared/interfaces/country.model';

import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { catchError, map, retry } from 'rxjs/operators';
import { HandleHttpResponseError } from '../../shared/utils/handleHttpResponseError/httpErrorHandler';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  api = environment.API_URL;

  constructor(private http: HttpClient) { }

  // getJobs(): Observable<Job> {
  //   return this.http.get(`${this.api}/jobs`).pipe(
  //     retry(3),
  //     catchError(HandleHttpResponseError),
  //     map((response: any) => {
  //       return response;
  //     })
  //   );
  // }

  getCategories(): Observable<Category> {
    return this.http.get(`${this.api}categories/`).pipe(
      retry(3),
      catchError(HandleHttpResponseError),
      map((response: any) => {
        return response;
      })
    );
  }

  getCountries(): Observable<Country> {
    return this.http.get(`${this.api}countries/`).pipe(
      retry(3),
      catchError(HandleHttpResponseError),
      map((response: any) => {
        return response;
      })
    );
  }


  getJobs(): Observable<any> {
    return this.http.get(`${this.api}jobs/`).pipe(
      retry(3),
      catchError(HandleHttpResponseError),
      map((response: any) => {
        return response;
      })
    );
  }

  getJob(id): Observable<any> {
    return this.http.get(`${this.api}jobs/${id}`).pipe(
      retry(3),
      catchError(HandleHttpResponseError),
      map((response: any) => {
        return response;
      })
    );
  }

}
