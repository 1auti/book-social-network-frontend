import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';


import { BookRoutingModule } from './book-routing.module';
import { BookCardComponent } from './components/book-card/book-card.component';
import { MenuComponent } from './components/menu/menu.component';
import { RatingComponent } from './components/rating/rating.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BorrowedBookListComponent } from './pages/borrowed-book-list/borrowed-book-list.component';
import { MainComponent } from './pages/main/main.component';
import { ManageBookComponent } from './pages/manage-book/manage-book.component';
import { MyBooksComponent } from './pages/my-books/my-books.component';
import { ReturnedBooksComponent } from './pages/returned-books/returned-books.component';



@NgModule({
  declarations: [
    BookCardComponent,
    MenuComponent,
    RatingComponent,
    BookDetailsComponent,
    BookListComponent,
    BorrowedBookListComponent,
    MainComponent,
    ManageBookComponent,
    MyBooksComponent,
    ReturnedBooksComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule
  
  ]
})
export class BookModule { }
