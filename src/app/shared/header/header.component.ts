import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'we-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() objHeader: any;
  constructor() { }

  ngOnInit() {
  }

  displayMenu() {
    this.objHeader.show = !this.objHeader.show;
  }
}
