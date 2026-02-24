import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Book } from "./components/book/book";
import { BookNote } from "./components/book-note/book-note";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Book, BookNote],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('book-note');
}
