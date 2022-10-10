import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { EbookComponent } from './ebook/ebook.component';
import { EtoysComponent } from './etoys/etoys.component';
import { FindstoreComponent } from './findstore/findstore.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ReviewComponent } from './review/review.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path: 'books', component: BooksComponent},
  { path: 'products', component: ProductsComponent,
  children: [
           { path:'ebook', component: EbookComponent},
            {path:'etoys', component:EtoysComponent}
  ]
},

{ path: 'findstore', component: FindstoreComponent,
children: [
         { path:':city', component: AddressComponent}
]
},
{ path : 'review', component: ReviewComponent},
{ path: 'login', component:LoginComponent},
{ path : 'search',component:SearchComponent},
{ path: 'authors', component:AuthorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
