import { Component, OnInit, ViewChild } from '@angular/core';
import { ListService } from '../../list/service/list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { List } from '../../models/list.models';
import { BuyService } from '../service/buy.service';

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
    private _bs: BuyService
  ) {
    activatedRoute.params.subscribe((params) => {
      const id = params.id;
      _ls.loadList(id).subscribe((res: any) => {
        console.log(res);
        this.idList = res._id;
        this.tableList = new MatTableDataSource(res.itemList);
        this.tableList.paginator = this.paginator;
        this.displayedColumns = ['select', 'name'];
        this.selection = new SelectionModel(true, []);
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
    this._bs.itemBuyed(item,this.idList).subscribe(() => { });
  }

}
