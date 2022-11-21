import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  basePath = 'http://localhost:8989/api/v1/drivers';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  create(user: User): Observable<any> {
    return this.http.post(this.basePath, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getByUsername(username: string): Observable<any> {
    return this.http.get(`${this.basePath}/username/${username}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }


}
