import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { User } from '../../shared/interfaces/user';
// import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../shared/interfaces/general-user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    // private cookies: CookieService,
    private router: Router
  ) {}

  login(user: User): Observable<any> {
    return this.http.post(`${environment.API_URL}auth/token`, user);
  }
}
