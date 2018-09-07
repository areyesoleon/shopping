import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private url = URL_SERVICES + 'config/module';
  constructor(
    public http: HttpClient,
    public router: Router,
  ) { }

  loadModule(){
    return this.http.get(this.url)
    .pipe(map((resp: any) =>{
      return resp.modules;
    }))
  }
}
