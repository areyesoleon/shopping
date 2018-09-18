import { Component, OnInit, Input } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';


@Component({
  selector: 'we-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() objHeader: any;
  constructor(
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
  }

  displayMenu() {
    this.objHeader.show = !this.objHeader.show;
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
    ){}
}
