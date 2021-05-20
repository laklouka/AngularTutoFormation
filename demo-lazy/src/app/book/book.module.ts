import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBookComponent } from './home-book/home-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path : '', component : HomeBookComponent},
  {path : 'search', component : SearchBookComponent},
]

@NgModule({
  declarations: [
    HomeBookComponent,
    SearchBookComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookModule { }
