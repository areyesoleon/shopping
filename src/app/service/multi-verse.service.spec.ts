import { TestBed, inject } from '@angular/core/testing';

import { MultiVerseService } from './multi-verse.service';

describe('MultiVerseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultiVerseService]
    });
  });

  it('should be created', inject([MultiVerseService], (service: MultiVerseService) => {
    expect(service).toBeTruthy();
  }));
});
