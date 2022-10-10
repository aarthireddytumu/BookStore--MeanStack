import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  searchText ;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.searchText.subscribe(text=> this.searchText = text)
  }

}
