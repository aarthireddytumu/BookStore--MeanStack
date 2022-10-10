import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { ProductsComponent } from './products/products.component';
import { EbookComponent } from './ebook/ebook.component';
import { EtoysComponent } from './etoys/etoys.component';
import { FindstoreComponent } from './findstore/findstore.component';
import { AddressComponent } from './address/address.component';
import { LogService } from './log.service';
import { ReviewService } from './review.service';
import { ReviewComponent } from './review/review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { SearchService } from './search.service';
import { SearchComponent } from './search/search.component';
import { AuthorsComponent } from './authors/authors.component';
import { HttpService } from './http.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    ProductsComponent,
    EbookComponent,
    EtoysComponent,
    FindstoreComponent,
    AddressComponent,
    ReviewComponent,
    LoginComponent,
    DisplayComponent,
    SearchComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LogService, ReviewService,SearchService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
