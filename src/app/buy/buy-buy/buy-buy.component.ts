import { Component, OnInit, ViewChild } from '@angular/core';
import { ListService } from '../../list/service/list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { BuyService } from '../service/buy.service';
import { DialogComponent } from '../../functions/dialog/dialog.component';

@Component({
  selector: 'we-buy-buy',
  templateUrl: './buy-buy.component.html',
  styleUrls: ['./buy-buy.component.scss']
})
export class BuyBuyComponent implements OnInit {

  public tableList: any = [];
  public selection: any = [];
  public displayedColumns: string[];
  private idList: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private _ls: ListService,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private _bs: BuyService,
    private dialog: MatDialog,
  ) {
    activatedRoute.params.subscribe((params) => {
      const id = params.id;
      _ls.loadList(id).subscribe((res: any) => {
        const pending = res.itemList.find((item) => item.buyed === false);
        if (!pending) {
          this.openDialog();
        }
        this.idList = res._id;
        this.tableList = new MatTableDataSource(res.itemList);
        this.tableList.paginator = this.paginator;
        this.displayedColumns = ['select', 'name'];
        this.selection = new SelectionModel(true, []);
        res.itemList.forEach(item => {
          if (item.buyed) {
            return this.selection.select(item);
          }
        });
      })
    })
  }

  ngOnInit() {
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableList.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.tableList.data.forEach(row => {
        return this.selection.select(row);
      });
    }
  }

  itemBuyed(item) {
    this._bs.itemBuyed(item, this.idList).subscribe((res) => {
      const pending = res.itemList.find((item) => item.buyed === false);
      if (!pending) {
        this.openDialog();
      }

    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { title: 'Terminada', message: 'La lista esta terminada, quiere cerrarla', icon: 'done_all' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'true') {
        this._bs.listFinished(this.idList).subscribe(() => {
          this.router.navigate(['/buy-list']);
        });
      }
    });
  }

}
