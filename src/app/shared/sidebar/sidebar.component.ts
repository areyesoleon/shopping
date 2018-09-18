import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MultiVerseService } from '../../service/multi-verse.service';

@Component({
  selector: 'we-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private _options: any;
  private _show: boolean;
  constructor(
    private router: Router,
    private _ms: MultiVerseService
  ) {
  }

  ngOnInit() { }

  get options(): any {
    return this._options;
  }

  @Input() set options(value: any) {
    this._options = value;
  }

  get show(): boolean {
    return this._show;
  }

  @Input() set show(value: boolean) {
    this._show = value;
  }

  goRoute(route: string) {
    this.router.navigate(['/' + route]);
    this._ms.getUniverse()['menu'].show = false;
  }
}
