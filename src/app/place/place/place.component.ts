import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Place } from '../../models/place.model';
import { PlaceService } from '../service/place.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'we-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  public place: Place = new Place('',true,'5b96a42ef40bad4f00ccb161','');
  constructor(
    private _ps: PlaceService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  savePlace(pf: NgForm){
    if(pf.invalid){
      this.snackBar.open('Lugar', 'Ingrese los datos en los campos con *', {
        panelClass: ['warning-snackBar']
      });
      return;
    }
    this._ps.savePlace(this.place).subscribe(() => {});
  }

}
