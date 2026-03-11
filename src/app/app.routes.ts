import { Routes } from '@angular/router';
import { BookOverview } from './components/book-overview/book-overview';
import { Book } from './components/book/book';

export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookOverview },
  { path: 'books/add', component: Book },
  { path: 'books/edit/:id', component: Book },
];
