import { Component, OnInit, ViewChild } from '@angular/core';
import { PlaceService } from '../service/place.service';
import { MultiVerseService } from '../../service/multi-verse.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'we-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {

  public tablePlace:any = [];
  public displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public _ps: PlaceService,
    public _ms: MultiVerseService,
    private router: Router
  ) {
    this._ms.setLoading(true);
    this.loadAllPlace();
  }

  ngOnInit() {
  }

  loadAllPlace() {
    this._ps.loadAllPlace().subscribe((res:any) => {
      this.tablePlace = new MatTableDataSource(res.places);
      this.tablePlace.paginator = this.paginator;
      this.tablePlace.sort = this.sort;
      this.displayedColumns = ['index','name', 'state'];
    });
  }

  filter(value: any){
    this.tablePlace.filter = value.trim().toLowerCase();
    if (this.tablePlace.paginator) {
      this.tablePlace.paginator.firstPage();
    }
  }

  editPlace(id: string){
    this.router.navigate(['/place/'+id]);
  }

}
