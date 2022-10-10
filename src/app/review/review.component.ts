import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
  }
  submitForm(reviewForm):void{
    reviewForm.created=new Date();
    //console.log(reviewForm);
    this.reviewService.addreview(reviewForm).subscribe(res => console.log(res));
  }

}
