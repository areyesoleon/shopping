import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MultiVerseService } from '../../service/multi-verse.service';
import { Router } from '@angular/router';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'we-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  public tableItem: any = [];
  public displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public _ms: MultiVerseService,
    public _is: ItemService,
    private router: Router
  ) {
    this._ms.setLoading(true);
    this.loadAllItem();
  }

  ngOnInit() {
  }

  loadAllItem() {
    this._is.loadAllItem().subscribe((res:any) => {
      this.tableItem = new MatTableDataSource(res);
      this.tableItem.paginator = this.paginator;
      this.tableItem.sort = this.sort;
      this.displayedColumns = ['index', 'name', 'state'];
    })
  }

  filter(value: any) {
    this.tableItem.filter = value.trim().toLowerCase();
    if (this.tableItem.paginator) {
      this.tableItem.paginator.firstPage();
    }
  }

  editItem(id: string) {
    this.router.navigate(['/item/' + id]);
  }

}
