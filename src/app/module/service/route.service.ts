import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICES } from '../../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  private url = URL_SERVICES;
  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  loadRoute(id: string) {
    return this.http.get(this.url + `config/route/${id}`)
    .pipe(map((resp: any) => {
      return resp.rutas;
    }));
  }
}
