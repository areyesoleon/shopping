import { Component, OnInit, Input } from '@angular/core';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'we-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() objModules;
  constructor(
    public _rs: RouteService
  ) {
  }

  ngOnInit() {
  }

  setOpcions(id: string) {
    this._rs.loadRoute(id).subscribe((res) => {
      this.objModules.options = res;
    });
  }

}
