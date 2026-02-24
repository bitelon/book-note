import { Component } from '@angular/core';

@Component({
  selector: 'book-list-item',
  imports: [],
  templateUrl: './book-note.html',
  styleUrl: './book-note.scss',
})
export class BookNote {
    title : string = 'BuchTitel';
    author: string = 'BuchAuthor';
    constructor() {
      
    }

    open() {
      console.log('open form');
    }
    delete(event: Event) {
      event.stopPropagation();
      console.log('delete entry');
    }
}
