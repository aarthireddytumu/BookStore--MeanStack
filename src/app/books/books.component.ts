import { Component, OnInit } from '@angular/core';
import {Book} from '../Book';
import { HttpService } from '../http.service';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  // books: Book[] = [
  //   {
  //     title: 'Unlocking Android',
  //     isbn: '1933988673',
  //     thumbnailUrl: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg',
  //     authors: ['W. Frank Ableson', 'Charlie Collins', 'Robi Sen']
  //   },
  //   {
  //     title: 'Android in Action, Second Edition',
  //     isbn: '1935182722',
  //     thumbnailUrl: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg',
  //     authors: ['W. Frank Ableson', 'Robi Sen']
  //   },
  //   {
  //     title: 'Flex 3 in Action',
  //     thumbnailUrl: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg',
  //     authors: ['Tariq Ahmed with Jon Hirschi', 'Faisal Abid']
  //   },
  //   {
  //     title: 'Flex 4 in Action',
  //     thumbnailUrl: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg',
  //     authors: ['Tariq Ahmed', 'Dan Orlando', 'John C. Bland II', 'Joel Hooks']
  //   },
  //   {
  //     title: 'Collective Intelligence in Action',
  //     thumbnailUrl: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg',
  //     authors: ['Satnam Alag']
  //   },
  //   {
  //     title: 'Zend Framework in Action',
  //     thumbnailUrl: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg',
  //     authors: ['Rob Allen', 'Nick Lo', 'Steven Brown']
  //   },
  //   {
  //     title: 'Flex on Java',
  //     thumbnailUrl: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg',
  //     authors: ['Bernerd Allmon', 'Jeremy Anderson']
  //   }
  // ];
  books;
  review;
  
  constructor(private reviewService: ReviewService, private httpService: HttpService) { }

  ngOnInit(): void {
    //this.review = this.reviewService.getReviews();
    this.reviewService.getReviews().subscribe(data => this.review=data)
    this.httpService.getBooks().subscribe(data => this.books=data)
  }
  deleteCmnt(rev){
    let index = this.review.indexOf(rev);
    this.review.splice(index,1);
}
  }

