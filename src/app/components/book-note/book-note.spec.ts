import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNote } from './book-note';

describe('BookNote', () => {
  let component: BookNote;
  let fixture: ComponentFixture<BookNote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookNote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookNote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
