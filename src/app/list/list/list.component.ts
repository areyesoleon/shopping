import { Component, OnInit, ViewChild } from '@angular/core';
import { List } from '../../models/list.models';
import { MultiVerseService } from '../../service/multi-verse.service';
import { NgForm } from '@angular/forms';
import { ItemService } from '../../item/service/item.service';
import { MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'we-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private _mv: MultiVerseService,
    private _is: ItemService,
    private snackBar: MatSnackBar,
  ) {
    this.loadItems();
  }

  private list: List = new List('', '', false, this._mv.loadPlace()['_id']);
  public arrItems: any[] = [];
  private items: any = [];
  public tableItem: any = [];
  public selection: any = [];
  public displayedColumns: string[];
  ngOnInit() {
  }

  loadItems() {
    this._is.loadAllItem().subscribe((res: any) => {
      this.tableItem = new MatTableDataSource(res);
      this.tableItem.paginator = this.paginator;
      this.displayedColumns = ['select', 'name',];
      this.selection = new SelectionModel(true, []);
    })
  }

  filter(value: any) {
    this.tableItem.filter = value.trim().toLowerCase();
    if (this.tableItem.paginator) {
      this.tableItem.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableItem.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.arrItems = [];
      this.objItems = this.arrItems;
    } else {
      this.tableItem.data.forEach(row => {
        this.addItemToLis(row);
        return this.selection.select(row)
      });
      this.objItems = this.arrItems;
    }
  }

  addItemToLis(item) {
    delete item.state;
    delete item.userId;
    const index = this.arrItems.indexOf(item);
    if (index > -1) {
      this.arrItems.splice(index, 1);
    } else {
      this.arrItems.push(item);
    }
    this.objItems = this.arrItems;
  }

  get objList() {
    return this.list;
  }

  set objList(obj: List) {
    this.list = obj;
  }

  get objItems() {
    return this.items;
  }

  set objItems(obj) {
    this.items = obj;
  }

  saveList(lf: NgForm) {
    if (lf.invalid) {
      this.snackBar.open('Lista', 'El nombre es obligatorio', {
        panelClass: ['warning-snackBar']
      });
      return;
    }

    if (!this.objItems.length) {
      this.snackBar.open('Lista', 'Seleccione algun producto', {
        panelClass: ['warning-snackBar']
      });
      return;
    }

  }

}
