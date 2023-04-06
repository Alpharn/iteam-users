import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ILoginResponseData } from '../models/login-response-data';
import { IAuthCredentials } from '../models/credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: IAuthCredentials): Observable<ILoginResponseData> {
    return this.http.post<ILoginResponseData>(
      `${environment.apiUrl}/auth/sign-in`,
      credentials,
    );
  }

  register(credentials: IAuthCredentials): Observable<ILoginResponseData> {
    return this.http.post<ILoginResponseData>(
      `${environment.apiUrl}/auth/registration`,
      credentials,
    );
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/auth/refresh`, '');
  }

  refresh(): Observable<ILoginResponseData> {
    return this.http.post<ILoginResponseData>(
      `${environment.apiUrl}/auth/refresh`,
      '',
    );
  }
}