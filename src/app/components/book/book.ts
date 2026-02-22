import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookFormDto } from '../../dto/bookDto';

@Component({
  selector: 'book-form',
  imports: [ReactiveFormsModule],
  templateUrl: './book.html',
  styleUrl: './book.scss',
})
export class Book {
    @Output() saveBookEvent = new EventEmitter<BookFormDto>();
    submitted = false;


    bookForm = new FormGroup({
      name: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)]
      }),
      author: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)]
    }),
      note: new FormControl<string>('', { nonNullable: true }),
    })

    saveBook() {
      console.log('save Book');
      this.submitted = true;
      if(this.bookForm.invalid) {
        this.bookForm.markAllAsTouched();
        return;
      }

      const bookData: BookFormDto = {
        name: this.bookForm.controls.name.value,
        author: this.bookForm.controls.author.value,
        note: this.bookForm.controls.note.value,
      };

      this.saveBookEvent.emit(bookData);
    }
}
