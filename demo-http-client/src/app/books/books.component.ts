import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BookInterface } from '../interfaces/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  formSearch:FormGroup
  book : BookInterface
  constructor(private builder:FormBuilder, private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.formSearch = this.builder.group({
      search : new FormControl('')
    })
  }

  requestSearch() {
    this.httpClient.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${this.formSearch.value.search}&jscmd=data&format=json`).subscribe((res:any) => {
      for(let key in res) {
        console.log(res[key])
      }
    })
  }

}
