import { Component, OnInit, ViewChild } from '@angular/core';
import { MultiVerseService } from '../../service/multi-verse.service';
import { ListService } from '../../list/service/list.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'we-buy-list',
  templateUrl: './buy-list.component.html',
  styleUrls: ['./buy-list.component.scss']
})
export class BuyListComponent implements OnInit {

  public tableBuyList: any = [];
  public displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    public _ms: MultiVerseService,
    public _ls: ListService,
    private router: Router
  ) {
    this.loadAllListPending();
  }

  ngOnInit() {
  }

  loadAllListPending() {
    this._ls.loadAllListPending().subscribe((res) => {
      this.tableBuyList = new MatTableDataSource(res);
      this.tableBuyList.paginator = this.paginator;
      this.displayedColumns = ['index', 'name'];
    });
  }

  filter(value: any) {
    this.tableBuyList.filter = value.trim().toLowerCase();
    if (this.tableBuyList.paginator) {
      this.tableBuyList.paginator.firstPage();
    }
  }

  toBuy(id: string) {
    this.router.navigate(['/buy-buy/' + id]);
  }

}
