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
  selector: 'mainInfo-app',
  standalone: false,
  
  templateUrl: './main-info.component.html',
  styleUrl: '../app.component.css'
})
export class MainInfoComponent {
  title: string;
  books: BookCard[];
  constructor(private api: ApiService){
    this.title = ""
    this.books = []
  }
  getBooks(title: string){
    this.api.getBooksByTitle(title).subscribe((data) => {
      console.log(data)
      this.books = data as BookCard[];
      this.api.changeBooks(this.books)
      console.log(this.api.books, "api")
    })
  }
}
