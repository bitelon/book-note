import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'book-form',
  imports: [ReactiveFormsModule],
  templateUrl: './book.html',
  styleUrl: './book.scss',
})
export class Book {
    bookForm = new FormGroup({
      name: new FormControl(),
      author: new FormControl(),
      note: new FormControl()
    })


}
