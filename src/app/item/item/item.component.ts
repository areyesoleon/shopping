import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../../models/item.model';
import { MatSnackBar } from '@angular/material';
import { ItemService } from '../service/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'we-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public item: Item = new Item(localStorage.getItem('id'), '', true, '');
  private isEdit: boolean = false;
  private opt = 'saveItem';
  constructor(
    private snackBar: MatSnackBar,
    public _is: ItemService,
    public activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.loadItem(id);
        this.opt = 'updateItem';
        this.isEdit = true;
      }
    });
  }

  ngOnInit() {
  }

  saveItem(iform: NgForm) {
    if (iform.invalid) {
      this.snackBar.open('Producto', 'Los campos con * son obligatorios', {
        panelClass: ['warning-snackBar']
      });
      return;
    }
    this._is[this.opt](this.item).subscribe(() => {
      if (this.isEdit) {

      } else {
        this.item.name = '';
      }
    });
  }

  loadItem(id: string) {
    this._is.loadItem(id).subscribe((res: any) => {
      this.item = res;
    });
  }

}
