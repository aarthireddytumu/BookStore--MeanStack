import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etoys',
  templateUrl: './etoys.component.html',
  styleUrls: ['./etoys.component.css']
})
export class EtoysComponent implements OnInit {
  etoys = ['../assets/etoys/etoy1.jpg',
  '../assets/etoys/etoy2.jpg',
  '../assets/etoys/etoy3.jpg',
  '../assets/etoys/etoy4.jpg'
]

  constructor() { }

  ngOnInit(): void {
  }

}
