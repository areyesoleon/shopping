import { Component, OnInit } from '@angular/core';
import { MultiVerseService } from '../../service/multi-verse.service';
import { Router } from '@angular/router';
import { ListService } from '../service/list.service';

@Component({
  selector: 'we-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.scss']
})
export class ListListComponent implements OnInit {

  public lists;
  constructor(
    public _ms: MultiVerseService,
    public _ls: ListService,
    private router: Router
  ) { 
    this.loadAllListPending();
  }

  ngOnInit() {
  }

  loadAllListPending(){
    this._ls.loadAllListPending().subscribe((res) => this.lists = res);
  }

}
