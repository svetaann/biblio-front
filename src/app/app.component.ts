import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { RouterOutlet } from '@angular/router';
interface ReturnBook{
  date: string;
  title: string;
  status: string;
}
@Component({
  selector: 'biblioapp',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  providers: [ApiService],
})
export class AppComponent {
  title = 'biblio-front-app';
  // books: ReturnBook[]
  // constructor(private api: ApiService){
  //     // this.getBooks();
  //     this.books = []
  // }
  // getBooks() {
  //   this.api.getBooks().subscribe((data) => {
  //     console.log(data)
  //     this.books = data as ReturnBook[];
  //   })
  // }
  // getBooks = () => {
  //     this.api.getBooks().subscribe(
  //         data => {
  //             this.books = data as ReturnBook[];
  //         },
  //         error => {
  //             console.log(error)
  //         }
  //     )
  // }
}
