import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../place/service/place.service';
import { Place } from '../../models/place.model';

@Component({
  selector: 'we-place-selected',
  templateUrl: './place-selected.component.html',
  styleUrls: ['./place-selected.component.scss']
})
export class PlaceSelectedComponent implements OnInit {

  public places: Place[];
  public idPlace: string;
  constructor(
    private _ps: PlaceService
  ) {
    this.loadAllPlace();
    this.idPlace = localStorage.getItem('idPlace');
  }
  ngOnInit() { }
  loadAllPlace() {
    this._ps.loadAllPlace().subscribe((res) => this.places = res.places);
  }

  setNewPlace(id: string){
    localStorage.setItem('idPlace',id);
    this.idPlace = id;
  }
}
