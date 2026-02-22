import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Book } from "./components/book/book";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Book],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('book-note');
}
