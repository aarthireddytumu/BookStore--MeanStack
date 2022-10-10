import { Component, OnInit } from '@angular/core';
import{ HttpService} from '../http.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getAuthors().subscribe(res => {this.authors = res;
    console.log(this.authors);
  },
  error => console.log(error)
  );
}
}
