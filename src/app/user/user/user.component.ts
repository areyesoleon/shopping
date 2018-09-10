import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserModule } from '../user.module';
import { User } from '../../models/user.model';

@Component({
  selector: 'we-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user: UserModule = new User('','','',true,'');
  constructor(
    public _us: UserService
  ) { }

  ngOnInit() {
  }

  saveUser(){
    this._us.saveUser(this.user).subscribe(() => {});
  }

}
