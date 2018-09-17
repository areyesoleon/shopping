import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../../models/item.model';
import { MatSnackBar } from '@angular/material';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'we-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public item: Item = new Item(localStorage.getItem('id'),'', true,'');
  constructor(
    private snackBar: MatSnackBar,
    public _is: ItemService
  ) { }

  ngOnInit() {
  }

  saveItem(iform: NgForm) {
    if (iform.invalid) {
      this.snackBar.open('Producto', 'Los campos con * son obligatorios', {
        panelClass: ['warning-snackBar']
      });
      return;
    }
    this._is.saveItem(this.item).subscribe(() => { });
  }

}
