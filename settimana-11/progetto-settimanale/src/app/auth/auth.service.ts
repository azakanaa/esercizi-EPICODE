import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register.interface';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthData } from '../models/auth-data.interface';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL = environment.apiURL
  jwtHelper = new JwtHelperService();

  private authSub = new BehaviorSubject<AuthData | null>(null);
  user$ = this.authSub.asObservable();
  timeOut: any;

  constructor(private http: HttpClient, private router: Router) { }

  login(data: { email: string, password: string }) {
    return this.http.post<AuthData>(`${this.apiURL}login`, data).pipe(
      tap((data) => {
        console.log('Auth data: ', data);
      }), tap((data) => {
        this.authSub.next(data);
        localStorage.setItem('user', JSON.stringify(data));
        this.autoLogout(data);
      }), 
      catchError(this.errors)
    );
  }

  signup(data: Register) {
    return this.http.post(`${this.apiURL}register`, data).pipe(
      catchError(this.errors)
    );
  }

  logout() {
    this.authSub.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  restore() {
    const userJson = localStorage.getItem('user');
    if(!userJson) {
      return;
    }
    const user: AuthData = JSON.parse(userJson);
    this.authSub.next(user);
    this.autoLogout(user);
  }

  autoLogout(user: AuthData) {
    const dateExpiration = this.jwtHelper.getTokenExpirationDate(user.accessToken) as Date;
    const millisecondsExp = dateExpiration.getTime() - new Date().getTime();
    this.timeOut = setTimeout(() => {
      this.logout();
    }, millisecondsExp);
  }

  private errors(err: any) {
    switch (err.error) {
      case 'Email already exists':
        return throwError('User already exists');
        break;

      case 'Bad credentials':
        return throwError('Username or password are wrong');
        break;

      default:
        return throwError('Error');
        break;
    }
  }
}
