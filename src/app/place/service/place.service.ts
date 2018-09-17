import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from '../../models/place.model';
import { URL_SERVICES } from '../../config/config';
import { map, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { of } from 'rxjs/internal/observable/of';
import { MultiVerseService } from '../../service/multi-verse.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private url = URL_SERVICES;
  constructor(
    public http: HttpClient,
    public snackBar: MatSnackBar,
    public _ms: MultiVerseService
  ) { }

  savePlace(place: Place) {
    this._ms.setLoading(true);
    return this.http.post(this.url + 'admin/place', place)
      .pipe(map((resp: any) => {
        this.snackBar.open('Lugar', 'Creado', {
          duration: 3000,
          panelClass: ['success-snackBar']
        });
        this._ms.setLoading(false);
        return resp.place;
      }), catchError((err: any) => {
        this.snackBar.open('Usuario', err.error.errors.message, {
          panelClass: ['error-snackBar']
        });
        this._ms.setLoading(false);
        return of(err);
      }));
  }

  updatePlace(place: Place) {
    this._ms.setLoading(true);
    return this.http.put(this.url + 'admin/place/' + place._id, place)
      .pipe(map((res: any) => {
        this.snackBar.open('Lugar', 'Actualizado', {
          duration: 3000,
          panelClass: ['success-snackBar']
        });
        this._ms.setLoading(false);
        return res;
      }), catchError((err) => {
        this.snackBar.open('Lugar', 'Error al actualizar', {
          panelClass: ['error-snackBar']
        });
        this._ms.setLoading(false);
        return err;
      }));
  }

  loadPlace(id: string) {
    this._ms.setLoading(true);
    return this.http.get(this.url + 'admin/place/' + id)
      .pipe(map((res: any) => {
        this._ms.setLoading(false);
        return res;
      }), catchError((err: any) => {
        this._ms.setLoading(false);
        return err;
      }));
  }

  loadAllPlace() {
    return this.http.get(this.url + 'admin/place/?token=' + localStorage.getItem('token'))
      .pipe(map((res: any) => {
        this._ms.setLoading(false);
        return res;
      }), catchError((err: any) => {
        this._ms.setLoading(false);
        return err;
      }));
  }
}
