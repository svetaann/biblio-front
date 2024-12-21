import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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
  selector: 'book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css','../app.component.css']
})
export class BookComponent  implements OnInit{
  private sub: Subscription; 
  id: number;
  books: BookCard[];
  constructor(
      private route: ActivatedRoute, private api: ApiService) { this.sub = new Subscription(),
      this.id = 0
      this.books = []
    }

    getBookById(id: number){
      this.api.getBookById(id).subscribe((data) => {
        console.log(data)
        this.books = data as BookCard[];
      })
    }

  ngOnInit(): void {
      this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getBookById(this.id)
  });}

  
   ngOnDestroy(): void {
      this.sub.unsubscribe();
    }}
    

      