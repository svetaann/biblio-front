import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = "http://127.0.0.1:8000"
  books: BookCard[];
  httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin':'null'})

  constructor(private http: HttpClient) { 
    this.books = []
  }

  // getBooks(): Observable<any>{
  //   return this.http.get(this.baseurl + '/reader/2/return')
  //     }
  //   }

  getBooks(){
    return this.http.get(`${this.baseurl}/reader/2/return`).pipe(map((res) => res))
}
  getBooksByTitle(title: string){
    const params = new HttpParams().set('title',title)
    return this.http.get(`${this.baseurl}/books`, {params: params}).pipe(map((res) => res))
  }

  getBookById(id: number){
    return this.http.get(`${this.baseurl}/book/${id}`,{headers: this.httpHeaders}).pipe(map((res) => res))
  }

  changeBooks(newList: BookCard[]){
    this.books = newList
  }

  getReaderId(login: string){
    
  }


}
