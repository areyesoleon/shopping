import { Component, OnInit, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { Router } from '@angular/router';
import { PlaceSelectedComponent } from '../../functions/place-selected/place-selected.component';

@Component({
  selector: 'we-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() menu: any;
  @Input() place: any;
  constructor(
    private bottomSheet: MatBottomSheet,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  displayMenu() {
    this.menu.show = !this.menu.show;
  }

  setPlace(): void {
    this.bottomSheet.open(PlaceSelectedComponent);
  }

  goModules() {
    this.router.navigate(['/modules']);
    this.menu.show = false;
  }
}
