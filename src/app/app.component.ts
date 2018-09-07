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
  constructor(
    public _mv: MultiVerseService,
    public _ms: ModuleService
  ) {
    this.universe = {
      company: {
        name: 'name company'
      },
      menu: {
        show: false,
        modules: [
          {
            name: 'Lugares',
            icon: 'home',
            disabled: false,
            id: 'place'
          },
          {
            name: 'Miembros',
            icon: 'supervised_user_circle',
            disabled: false,
            id: 'user'
          },
          {
            name: 'Productos',
            icon: 'shopping_basket',
            disabled: true,
            id: 'box'
          }
        ],
        options: []
      }
    };
  }

  ngOnInit() {
    this.setUniverse();
    this.load().then((res) =>{
      this.universe.menu.modules = res[0];
      this.setUniverse();
    })
  }

  load() {
    return Promise.all([this._ms.loadModule().toPromise()])
  }

  setUniverse() {
    this._mv.setUniverse(this.universe);
  }
}
