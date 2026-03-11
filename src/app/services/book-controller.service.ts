import { inject, Injectable, signal } from '@angular/core';
import { BookDto, BookFormDto } from '../dto/bookDto';
import { LocalStorageService } from './local-storage.service';

const STORAGE_KEY = 'books';

@Injectable({
  providedIn: 'root',
})
export class BookControllerService {
  private storage = inject(LocalStorageService);

  private readonly _books = signal<BookDto[]>([]);
  readonly books = this._books.asReadonly();

  async init(): Promise<void> {
    const stored = await this.storage.get<BookDto[]>(STORAGE_KEY);
    if (stored) {
      this._books.set(stored);
    }
  }

  async saveBook(data: BookFormDto): Promise<void> {
    const book: BookDto = { id: crypto.randomUUID(), data };
    this._books.update(books => [...books, book]);
    await this.persist();
  }

  async updateBook(updated: BookDto): Promise<void> {
    this._books.update(books => books.map(b => (b.id === updated.id ? updated : b)));
    await this.persist();
  }

  async deleteBook(bookId: string): Promise<void> {
    this._books.update(books => books.filter(b => b.id !== bookId));
    await this.persist();
  }

  getBookById(id: string): BookDto | undefined {
    return this._books().find(b => b.id === id);
  }

  private async persist(): Promise<void> {
    await this.storage.set(STORAGE_KEY, this._books());
  }
}
