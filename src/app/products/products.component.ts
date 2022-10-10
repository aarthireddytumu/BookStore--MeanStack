import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit(): void {
    this.logService.log('product ng onInit called','debug');
  }

}
