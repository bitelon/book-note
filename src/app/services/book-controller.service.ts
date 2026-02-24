import { Injectable } from '@angular/core';
import { BookDto, BookFormDto } from '../dto/bookDto';

@Injectable({
  providedIn: 'root',
})
export class BookControllerService {

  constructor() {}

  public saveBook(book: BookFormDto){

  }

  public updateBook(book: BookDto) {

  }

  public deleteBook(bookId: string) {
      
  }
  
}
