import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { MultiVerseService } from '../service/multi-verse.service';

@Component({
  selector: 'we-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = new User('', localStorage.getItem('email'), '', true, '');
  constructor(
    public _ms: MultiVerseService,
    private snackBar: MatSnackBar
  ) {
    _ms.logout();
  }

  ngOnInit() {
  }

  login(lf: NgForm) {
    if (lf.invalid) {
      this.snackBar.open('Ingreso', 'Los campos con * son obligatorios', {
        panelClass: ['warning-snackBar']
      });
      return;
    }
    this._ms.login(this.user, lf.value.remember).subscribe();
  }
}
