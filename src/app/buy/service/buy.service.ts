import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
import { MultiVerseService } from '../../service/multi-verse.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  private url = URL_SERVICES;
  constructor(
    private http: HttpClient,
    private _ms: MultiVerseService,
    public snackBar: MatSnackBar,
  ) { }

  itemBuyed(item, listId) {
    this._ms.setLoading(true);
    return this.http.put(this.url + 'admin/buyed/' + listId + '/?token=' + localStorage.getItem('token'), item)
      .pipe(map((res: any) => {
        this._ms.setLoading(false);
        this.snackBar.open('Producto', 'Comprado', {
          duration: 3000,
          panelClass: ['success-snackBar']
        });
        return res.list;
      }, catchError((err: any) => {
        this.snackBar.open('Compra', err.error.errors.message, {
          panelClass: ['error-snackBar']
        });
        this._ms.setLoading(false);
        return err;
      })))
  }

  listFinished(list) {
    this._ms.setLoading(true);
    console.log(this.url + 'admin/buyed/listshop/' + list + '/?token=' + localStorage.getItem('token'));
    return this.http.put(this.url + 'admin/buyed/listshop/' + list + '/?token=' + localStorage.getItem('token'), list)
      .pipe(map((res: any) => {
        this._ms.setLoading(false);
        this.snackBar.open('Lista', 'Terminada', {
          duration: 3000,
          panelClass: ['success-snackBar']
        });
        return res;
      }, catchError((err: any) => {
        this._ms.setLoading(false);
        this.snackBar.open('Lista', err.error.errors.message, {
          panelClass: ['error-snackBar']
        });
        return err;
      })))
  }
}
