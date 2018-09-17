import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Route } from '@angular/router';
import { Item } from '../../models/item.model';
import { URL_SERVICES } from '../../config/config';
import { map } from 'rxjs/internal/operators/map';
import { MultiVerseService } from '../../service/multi-verse.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url = URL_SERVICES;
  constructor(
    public http: HttpClient,
    public snackBar: MatSnackBar,
    // public route: Route,
    public _ms: MultiVerseService
  ) { }

  saveItem(item: Item) {
    this._ms.setLoading(true);
    return this.http.post(this.url + 'admin/item', item)
      .pipe(map((res: any) => {
        this.snackBar.open('Producto', 'Creado', {
          duration: 3000,
          panelClass: ['success-snackBar']
        });
        this._ms.setLoading(false);
        return res.item;
      }), catchError((err: any) => {
        this.snackBar.open('Producto', err.error.errors.message, {
          panelClass: ['error-snackBar']
        });
        this._ms.setLoading(false);
        return err
      }));
  }
}
