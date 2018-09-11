import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { URL_SERVICES } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MultiVerseService {

  private universe: any;
  private url = URL_SERVICES;

  public user: User;
  public token: string;
  public id: string;
  constructor(
    public http: HttpClient,
    private snackBar: MatSnackBar,
    public router: Router
  ) {
    this.loadStorage();
    console.log("cuando entro");
  }

  getUniverse() {
    return this.universe;
  }

  setUniverse(obj: any) {
    this.universe = obj;
  }

  loadStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
      this.id = localStorage.getItem('id');
    } else {
      this.user = null;
      this.token = '';
      this.id = '';
    }
  }

  isLogged() {
    return (this.token.length > 20) ? true : false;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('user');
    this.loadStorage();
  }

  login(user: User, remember: boolean = false) {
    if (remember) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }

    return this.http.post(this.url + 'opt/login', user)
      .pipe(map((resp: any) => {
        localStorage.setItem('id', resp.id);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('user', JSON.stringify(resp.user));
        this.snackBar.open(resp.user.name, 'Bienvenido', {
          panelClass: ['success-snackBar'],
          duration: 3000
        });
        this.loadStorage();
        this.router.navigate(['/modules']);
        return true
      }), catchError((err: any) => {
        this.snackBar.open('Ingreso', err.error.message, {
          panelClass: ['error-snackBar']
        });
        return of(err);
      }));

  }
}
