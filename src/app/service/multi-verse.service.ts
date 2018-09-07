import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiVerseService {

  private universe: any;
  constructor() { }

  getUniverse() {
    return this.universe;
  }

  setUniverse(obj: any) {
    this.universe = obj;
  }
}
