import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../place/service/place.service';
import { Place } from '../../models/place.model';
import { MultiVerseService } from '../../service/multi-verse.service';
import { MatBottomSheetRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'we-place-selected',
  templateUrl: './place-selected.component.html',
  styleUrls: ['./place-selected.component.scss']
})
export class PlaceSelectedComponent implements OnInit {

  public places: Place[];
  public idPlace: string;
  constructor(
    private _ps: PlaceService,
    private _ms: MultiVerseService,
    private bottomSheetRef: MatBottomSheetRef<PlaceSelectedComponent>,
    private router: Router
  ) {
    this.loadAllPlace();
    this.loadStoragePlace();
  }
  ngOnInit() { }
  loadAllPlace() {
    this._ps.loadAllPlace().subscribe((res) => this.places = res.places);
  }

  setNewPlace(objPlace: Place) {
    this._ms.setPlace(objPlace);
    this.loadStoragePlace();
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  loadStoragePlace() {
    this.idPlace = (this._ms.loadPlace()) ? this._ms.loadPlace()['_id'] : '';
  }

  createNewPlace() {
    this.router.navigate(['/place']);
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
