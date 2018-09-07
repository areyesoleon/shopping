import { Component, OnInit } from '@angular/core';
import { MultiVerseService } from '../../service/multi-verse.service';

@Component({
  selector: 'we-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  public objModules: any;
  constructor(
    public _mv: MultiVerseService
  ) { }

  ngOnInit() {
    this.objModules = this._mv.getUniverse()['menu'];
  }

}
