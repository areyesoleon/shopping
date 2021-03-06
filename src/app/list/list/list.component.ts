import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { List } from '../../models/list.models';
import { MultiVerseService } from '../../service/multi-verse.service';
import { NgForm } from '@angular/forms';
import { ItemService } from '../../item/service/item.service';
import { MatPaginator, MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ItemList } from '../../models/itemList.models';
import { ListService } from '../service/list.service';
import { DialogComponent } from '../../functions/dialog/dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'we-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private list: List = new List('', '', false, this._mv.loadPlace()['_id'], []);
  private opt: string;
  private isEdit: boolean;
  constructor(
    private _mv: MultiVerseService,
    private _is: ItemService,
    private snackBar: MatSnackBar,
    private _ls: ListService,
    public dialog: MatDialog,
    public activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this._mv.setLoading(true);
    activatedRoute.params.subscribe((params) => {
      this._mv.setLoading(false);
      const id = params['id'];
      if (id) {
        this.isEdit = true;
        this.opt = 'updateList';
        this.loadList(id).then((res: any) => {
          this.tableItem = new MatTableDataSource(res[0]);
          this.tableItem.paginator = this.paginator;
          this.displayedColumns = ['select', 'name'];
          this.selection = new SelectionModel(true, []);
          this.objList = res[1];
          res[1].itemList.forEach(row => {
            res[0].forEach(element => {
              if (row.itemId === element._id) {
                this.addItemToLis(element);
                return this.selection.select(element);
              }
            });
          });
        });
      } else {
        this.opt = 'saveList';
        this.isEdit = false;
        this.loadItems();
      }

    });
  }

  public arrItems: ItemList[] = [];
  public tableItem: any = [];
  public selection: any = [];
  public displayedColumns: string[];
  ngOnInit() {
  }

  loadItems() {
    this._is.loadAllItemState().subscribe((res: any) => {
      this.tableItem = new MatTableDataSource(res);
      this.tableItem.paginator = this.paginator;
      this.displayedColumns = ['select', 'name'];
      this.selection = new SelectionModel(true, []);
    });
  }

  loadList(id: string) {
    return Promise.all([this._is.loadAllItemState().toPromise(), this._ls.loadList(id).toPromise()]);
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
      this.objList.itemList = this.arrItems;
    } else {
      this.tableItem.data.forEach(row => {
        this.addItemToLis(row);
        return this.selection.select(row);
      });
      this.objList.itemList = this.arrItems;
    }
  }

  addItemToLis(item) {
    item.itemId = (item._id) ? item._id : item.itemId;
    item.buyed = false;
    delete item._id;
    const index = this.arrItems.indexOf(item);
    if (index > -1) {
      this.arrItems.splice(index, 1);
    } else {
      this.arrItems.push(item);
    }
    this.objList.itemList = this.arrItems;
  }

  get objList() {
    return this.list;
  }

  set objList(obj: List) {
    this.list = obj;
  }

  saveList(lf: NgForm) {
    if (lf.invalid) {
      this.snackBar.open('Lista', 'El nombre es obligatorio', {
        panelClass: ['warning-snackBar']
      });
      return;
    }

    if (!Object.values(this.objList.itemList).length) {
      this.snackBar.open('Lista', 'Seleccione algun producto', {
        panelClass: ['warning-snackBar']
      });
      return;
    }
    this._ls[this.opt](this.objList).subscribe(() => { });
    if (this.isEdit) {
      this.router.navigate(['/list-list']);
    } else {
      lf.reset();
      this.objList.name = '';
      this.selection.clear();
      this.objList.itemList = [];
    }
  }

  clearAll() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { title: 'Limpiar todo', message: 'Esta seguro de limpiar toda la lista.', icon: 'warning' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'true') {
        this.objList.name = '';
        this.objList.itemList = [];
        this.selection.clear();
      }
    });
  }
}
