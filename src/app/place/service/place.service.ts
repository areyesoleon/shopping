import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from '../../models/place.model';
import { URL_SERVICES } from '../../config/config';
import { map, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private url = URL_SERVICES;
  constructor(
    public http: HttpClient,
    public snackBar: MatSnackBar
  ) { }

  savePlace(place: Place) {
    return this.http.post(this.url + 'admin/place', place)
      .pipe(map((resp: any) => {
        this.snackBar.open('Lugar', 'Creado', {
          duration: 3000,
          panelClass: ['success-snackBar']
        });
        return resp.place
      }), catchError((err: any) => {
        this.snackBar.open('Usuario', err.error.errors.message, {
          panelClass: ['error-snackBar']
        });
        return of(err);
      }));
  }
}
