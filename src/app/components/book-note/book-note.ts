import { Component, input, output } from '@angular/core';
import { IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { trashOutline } from 'ionicons/icons';
import { BookDto } from '../../dto/bookDto';

@Component({
  selector: 'book-list-item',
  imports: [IonItem, IonLabel, IonButton, IonIcon],
  templateUrl: './book-note.html',
  styleUrl: './book-note.scss',
})
export class BookNote {
  book = input.required<BookDto>();
  readonly trashOutline = trashOutline;

  openEvent = output<BookDto>();
  deleteEvent = output<string>();

  open() {
    this.openEvent.emit(this.book());
  }

  delete(event: Event) {
    event.stopPropagation();
    this.deleteEvent.emit(this.book().id);
  }
}
