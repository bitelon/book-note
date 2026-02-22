import { Component } from '@angular/core';

@Component({
  selector: 'app-book-note',
  imports: [],
  templateUrl: './book-note.html',
  styleUrl: './book-note.scss',
})
export class BookNote {
    constructor() {
      document.querySelectorAll('*').forEach(el => { if (el.scrollHeight > el.clientHeight + 1 || el.scrollWidth > el.clientWidth + 1) console.log(el) })
    }
}
