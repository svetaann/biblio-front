import { Component } from '@angular/core';
import { ApiService } from '../api.service';
interface Review{
  name: string;
  rating: number;
  date: string;
  text: string;
}
interface BookCard {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: string;
  description: string;
  url: string;
  number: number;
  rating: number;
  reviews: Review[]
}

@Component({
  selector: 'search-app',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrls: ['../app.component.css'],
})
export class SearchComponent {
  // title: string;
  // books: BookCard[];
  // constructor(private api: ApiService){
  //   this.title = ""
  //   this.books = []
  // }
  // getBooks(title: string){
  //   this.api.getBooksByTitle(title).subscribe((data) => {
  //     console.log(data)
  //     this.books = data as BookCard[];
  //     this.api.changeBooks(this.books)
  //     console.log(this.api.books, "api")
  //   })
  // }
}
