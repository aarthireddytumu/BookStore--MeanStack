import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebook',
  templateUrl: './ebook.component.html',
  styleUrls: ['./ebook.component.css']
})
export class EbookComponent implements OnInit {
  ebooks=['../assets/ebook/ebook1.jpeg',
  '../assets/ebook/download.jpg',
  '../assets/ebook/download (1).jpg',
  '../assets/ebook/download (2).jpg',
  '../assets/ebook/download (3).jpg'  ]
  constructor() { }

  ngOnInit(): void {
  }

}
