import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MultiVerseService } from '../service/multi-verse.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    public _ms: MultiVerseService,
    public router: Router,
    private snackBar: MatSnackBar
  ){}
  canActivate() {
    if(this._ms.isLogged()){
      return true;
    } else {
      this.snackBar.open('Ingreso', 'No esta autenticado', {
        panelClass: ['error-snackBar']
      });
      this.router.navigate(['/login']);
      return false;
    }
  }
}
