import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { URL_SERVICES } from '../../config/config';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { MatSnackBar } from '@angular/material';
import { MultiVerseService } from '../../service/multi-verse.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = URL_SERVICES;
  constructor(
    public http: HttpClient,
    public snackBar: MatSnackBar,
    public _ms: MultiVerseService
  ) { }

  saveUser(user: User) {
    this._ms.setLoading(true);
    return this.http.post(this.url + 'admin/user', user)
      .pipe(map((resp: any) => {
        this.snackBar.open('Usuario', 'Creado', {
          duration: 3000,
          panelClass: ['success-snackBar']
        });
        this._ms.setLoading(false);
        return resp.company;
      }), catchError((err: any) => {
        this.snackBar.open('Usuario', err.error.errors.message, {
          panelClass: ['error-snackBar']
        });
        this._ms.setLoading(false);
        return of(err);
      })
      );
  }
}
