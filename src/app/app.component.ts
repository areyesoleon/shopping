import { Component, OnInit } from '@angular/core';
import { MultiVerseService } from './service/multi-verse.service';
import { ModuleService } from './service/module.service';

@Component({
  selector: 'we-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public universe: any;
  public loading: any;
  constructor(
    public _mv: MultiVerseService,
    public _ms: ModuleService
  ) {
    this.universe = {
      menu: {
        show: false,
        modules: [],
        options: []
      },
      load: {
        loading: false
      },
      place: _mv.loadPlace()
    };
  }

  ngOnInit() {
    this.setUniverse();
    this.load().then((res) => {
      this.universe.menu.modules = res[0];
      this.setUniverse();
    });
  }

  load() {
    return Promise.all([this._ms.loadModule().toPromise()]);
  }

  setUniverse() {
    this._mv.setUniverse(this.universe);
  }
}
