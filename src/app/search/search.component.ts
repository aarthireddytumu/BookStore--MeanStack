import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchitem = new FormControl();
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchitem.valueChanges.subscribe(text =>{
      this.searchService.searchText.next(text);
    });
  }

}
