import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DEMO PIPE';
  val  = Date.now()
  name = "abadi ihab"
  p1 : Promise<string> | null = null

  o1 : Observable<number> | null = null
  //valString:string|null = null
  constructor() {

  }
  ngOnInit(): void {
    this.p1 = new Promise<string>((resolve, reject)=> {
      setTimeout(() => {
        resolve("toto")
      },2000)
    })

    let count = 1

    this.o1 = new Observable<number>(o => {
      setInterval(() => {

        count++
        o.next(count)
      },1000)
    })
    // this.p1.then(res => {
    //   this.valString = res
    // })
  }
}
