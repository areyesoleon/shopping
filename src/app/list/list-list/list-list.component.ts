import { Component, OnInit, ViewChild } from '@angular/core';
import { MultiVerseService } from '../../service/multi-verse.service';
import { Router } from '@angular/router';
import { ListService } from '../service/list.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'we-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.scss']
})
export class ListListComponent implements OnInit {

  public tableList: any = [];
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
      this.tableList = new MatTableDataSource(res);
      this.tableList.paginator = this.paginator;
      this.displayedColumns = ['index', 'name'];
    });
  }

  editList(id: string) {
    this.router.navigate(['/list/' + id]);
  }

}
