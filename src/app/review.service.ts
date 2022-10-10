import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  // private reviews = [{
  //   _id: '58c6a794fb4d61115815f8ae',
  //   title: 'Angular mastering',
  //   text: 'Best book in angular! ',
  //   rating: 5,
  //   created: '2017-03-13T14:07:16.529Z'
  // },
  // {
  //   _id: '58c6a812fb4d61115815f8af',
  //   title: 'science every day',
  //   text: 'I could read this book all day long 🥚🥚🥚🥚🥚',
  //   rating: 5,
  //   created: '2017-03-13T14:09:22.108Z'
  // },
  // {
  //   _id: '58c6a826fb4d61115815f8b0',
  //   title: 'node in web app',
  //   text: '🍕🍕🍕🍕 This Best one to learn node 💣',
  //   rating: 4.5,
  //   created: '2017-03-13T14:09:42.397Z'
  // },
  // {
  //   _id: '58c6a836fb4d61115815f8b1',
  //   title: 'Angular',
  //   store: '58c0609b8060197ca0b52d5c',
  //   text: 'Meh Soup ',
  //   rating: 3,
  //   created: '2017-03-13T14:09:58.884Z'
  // },
  // {
  //   _id: '58c6a853fb4d61115815f8b2',
  //   title: 'Angular learning',
  //   text: 'Nothing better than a PBR after a long day of social media ',
  //   rating: 3,
  //   created: '2017-03-13T14:10:27.885Z'
  // },
  // {
  //   _id: '58c6a88afb4d61115815f8b3',
  //   title: 'Angular web dev',
  //   text: '👎🏻 Too Expensive ',
  //   rating: 1,
  //   created: '2017-03-13T14:11:22.546Z'
  // }
  // ];
  constructor(private http: HttpClient) { }

  getReviews(): Observable<any>{
    return this.http.get('http://localhost:3000/reviews')
  }
  // getReviews(){
  //   return this.reviews;
  // }
  addreview(review): Observable<any>{
  //this.reviews.push(review);
    console.log(review);
    return this.http.post('http://localhost:3000/reviews',review)
  
 }
  
}
