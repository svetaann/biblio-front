import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SearchComponent } from '../search/search.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'listbooks-app',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css','../app.component.css']
})
export class ListComponent implements OnInit{
  private sub: Subscription; 
  title: string;
  books: BookCard[];
  constructor(
      private route: ActivatedRoute, private api: ApiService
    ) { this.sub = new Subscription(),
      this.title = ""
      this.books = []
    }
  
    getBooks(title: string){
      this.api.getBooksByTitle(title).subscribe((data) => {
        console.log(data)
        this.books = data as BookCard[];
      })
    }

  ngOnInit(): void {
      this.sub = this.route.params.subscribe(params => {
      this.title = params['t'];
      this.getBooks(this.title)
  });}

  
   ngOnDestroy(): void {
      this.sub.unsubscribe();
    }}
    

      