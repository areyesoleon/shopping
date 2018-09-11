import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserModule } from '../user.module';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'we-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user: UserModule = new User('', '', '', true, '');
  constructor(
    public _us: UserService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  saveUser(us: NgForm) {
    if (us.invalid) {
      this.snackBar.open('Usuario', 'Los campos con * son obligatorios', {
        panelClass: ['warning-snackBar']
      });
      return;
    }
    this._us.saveUser(this.user).subscribe(() => {});
  }

}
