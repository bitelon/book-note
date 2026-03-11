import { Component, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton,
  IonList, IonItem, IonInput, IonTextarea, IonNote,
} from '@ionic/angular/standalone';
import { BookControllerService } from '../../services/book-controller.service';
import { BookFormDto } from '../../dto/bookDto';

@Component({
  selector: 'book-form',
  host: { class: 'ion-page' },
  imports: [ReactiveFormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonList, IonItem, IonInput, IonTextarea, IonNote],
  templateUrl: './book.html',
  styleUrl: './book.scss',
})
export class Book {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private bookService = inject(BookControllerService);

  private bookId = signal<string | null>(this.route.snapshot.paramMap.get('id'));
  isEditMode = computed(() => this.bookId() !== null);

  submitted = false;

  bookForm = new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    author: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    note: new FormControl<string>('', { nonNullable: true }),
  });

  constructor() {
    const id = this.bookId();
    if (id) {
      const book = this.bookService.getBookById(id);
      if (book) {
        this.bookForm.patchValue(book.data);
      }
    }
  }

  async saveBook(): Promise<void> {
    this.submitted = true;
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }

    const bookData: BookFormDto = {
      name: this.bookForm.controls.name.value,
      author: this.bookForm.controls.author.value,
      note: this.bookForm.controls.note.value,
    };

    const id = this.bookId();
    if (id) {
      const existing = this.bookService.getBookById(id);
      if (existing) {
        await this.bookService.updateBook({ ...existing, data: bookData });
      }
    } else {
      await this.bookService.saveBook(bookData);
    }

    this.router.navigate(['/books']);
  }

  cancel(): void {
    this.router.navigate(['/books']);
  }
}
