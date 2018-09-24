import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { List } from '../../models/list.models';
import { map } from 'rxjs/internal/operators/map';
import { MultiVerseService } from '../../service/multi-verse.service';
import { MatSnackBar } from '@angular/material';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private url = URL_SERVICES;
  constructor(
    public http: HttpClient,
    private _ms: MultiVerseService,
    public snackBar: MatSnackBar,
  ) { }

  saveList(list: List) {
    this._ms.setLoading(true);
    return this.http.post(this.url + 'admin/list/?token=' + localStorage.getItem('token'), list)
      .pipe(map((res: any) => {
        this.snackBar.open('Lista', 'Creado', {
          duration: 3000,
          panelClass: ['success-snackBar']
        });
        this._ms.setLoading(false);
        return res.list;
      }), catchError((err: any) => {
        this.snackBar.open('Producto', err.error.errors.message, {
          panelClass: ['error-snackBar']
        });
        this._ms.setLoading(false);
        return err;
      }));
  }

  updateList(list: List) {
    this._ms.setLoading(true);
    return this.http.put(this.url + 'admin/list/' + list._id, list)
      .pipe(map((res: any) => {
        this.snackBar.open('Lista', 'Actualizada', {
          duration: 3000,
          panelClass: ['success-snackBar']
        });
        this._ms.setLoading(false);
        return res.list;
      }), catchError((err: any) => {
        this.snackBar.open('Producto', err.error.errors.message, {
          panelClass: ['error-snackBar']
        });
        this._ms.setLoading(false);
        return err;
      }));
  }

  loadAllListPending() {
    this._ms.setLoading(true);
    return this.http.get(this.url + 'admin/list/state/false/' + this._ms.loadPlace()['_id'] + '/?token=' + localStorage.getItem('token'))
      .pipe(map((res: any) => {
        this._ms.setLoading(false);
        return res.lists;
      }), catchError((err) => {
        this._ms.setLoading(false);
        this.snackBar.open('Lista', err.error.errors.message, {
          panelClass: ['error-snackBar']
        });
        return err;
      }));
  }

  loadList(id: string) {
    this._ms.setLoading(true);
    return this.http.get(this.url + 'admin/list/' + id + '/?token=' + localStorage.getItem('token'))
      .pipe(map((res: any) => {
        this._ms.setLoading(false);
        return res.list;
      }), catchError((err: any) => {
        this._ms.setLoading(false);
        this.snackBar.open('Lista', err.error.errors.message, {
          panelClass: ['error-snackBar']
        });
        return err;
      }));
  }
}
