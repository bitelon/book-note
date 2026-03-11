import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonButtons, IonButton, IonIcon,
} from '@ionic/angular/standalone';
import { addOutline } from 'ionicons/icons';
import { BookNote } from '../book-note/book-note';
import { BookControllerService } from '../../services/book-controller.service';
import { BookDto } from '../../dto/bookDto';

@Component({
  selector: 'app-book-overview',
  host: { class: 'ion-page' },
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButtons, IonButton, IonIcon, BookNote],
  templateUrl: './book-overview.html',
  styleUrl: './book-overview.scss',
})
export class BookOverview {
  private bookService = inject(BookControllerService);
  private router = inject(Router);

  books = this.bookService.books;
  readonly addOutline = addOutline;

  onAdd(): void {
    this.router.navigate(['/books/add']);
  }

  onOpen(book: BookDto): void {
    this.router.navigate(['/books/edit', book.id]);
  }

  async onDelete(bookId: string): Promise<void> {
    await this.bookService.deleteBook(bookId);
  }
}
