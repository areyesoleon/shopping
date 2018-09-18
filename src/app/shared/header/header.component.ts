import { Component, OnInit, Input } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { MultiVerseService } from '../../service/multi-verse.service';


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
  ) {
  }

  ngOnInit() {
    console.log(this.menu);
  }

  displayMenu() {
    this.menu.show = !this.menu.show;
  }

  setPlace(): void {
    this.bottomSheet.open(PlaceSelectedPage);
  }
}

@Component({
  selector: 'we-place-selected-page',
  templateUrl: 'place-selected-page.html'
})
export class PlaceSelectedPage {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<PlaceSelectedPage>
  ) { }
}
