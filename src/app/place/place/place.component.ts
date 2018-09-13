import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Place } from '../../models/place.model';
import { PlaceService } from '../service/place.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'we-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  public place: Place = new Place('', true, localStorage.getItem('id'), '');
  private opt = 'savePlace';
  constructor(
    private _ps: PlaceService,
    private snackBar: MatSnackBar,
    public activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.loadPlace(id);
        this.opt = 'updatePlace';
      }
    });
  }

  ngOnInit() {
  }

  savePlace(pf: NgForm) {
    if (pf.invalid) {
      this.snackBar.open('Lugar', 'Los campos con * son obligatorios', {
        panelClass: ['warning-snackBar']
      });
      return;
    }
    this._ps[this.opt](this.place).subscribe(() => {});
  }

  loadPlace(id: string) {
    this._ps.loadPlace(id).subscribe((res) => this.place = res.place);
  }

}
