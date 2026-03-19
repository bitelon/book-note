import { TestBed } from '@angular/core/testing';

import { BookFacade } from './book-facade';

describe('BookFacade', () => {
  let service: BookFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
