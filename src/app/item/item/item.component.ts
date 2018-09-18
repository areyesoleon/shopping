import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../../models/item.model';
import { MatSnackBar } from '@angular/material';
import { ItemService } from '../service/item.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'we-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public item: Item = new Item('', '', true, '');
  private isEdit = false;
  private opt = 'saveItem';
  constructor(
    private snackBar: MatSnackBar,
    public _is: ItemService,
    public activatedRoute: ActivatedRoute,
    private router: Router
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
        this.router.navigate(['/item-list']);
      } else {
        this.item.name = '';
        iform.reset();
      }
    });
  }

  loadItem(id: string) {
    this._is.loadItem(id).subscribe((res: any) => {
      this.item = res;
    });
  }

}
