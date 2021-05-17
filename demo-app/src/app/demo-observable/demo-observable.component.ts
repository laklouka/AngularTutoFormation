import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ObservableService } from './ObservableService';

@Component({
  selector: 'app-demo-observable',
  templateUrl: './demo-observable.component.html',
  styleUrls: ['./demo-observable.component.css'],
})
export class DemoObservableComponent {
  // obs:any
  // tick = 1
  // values : Array<number> = new Array<number>()
  constructor() {
    // this.obs = new Observable(ob => {
    //   setInterval(() => {
    //     ob.next(this.tick)
    //     this.tick += 1000
    //     if(this.tick >= 10000) {
    //       ob.complete()
    //     }
    //   },500)
    // })
    // this.obs.subscribe((res) => {
    //   this.values.push(res)
    // },(err) => {}, () => {alert('end of observable')})
  }
}

@Component({
  selector: 'obs1',
  template: `<div>
    <h1>obs1</h1>
    <button (click)="send()">send data</button>
  </div>`,
})
export class Obs1 {
  tick: number = 0;
  constructor(public observableService: ObservableService) {}
  public send() {
    // this.observableService.data = new Observable((ob) => {
    //   setInterval(() => {
    //     ob.next(this.tick);
    //     this.tick += 1000;
    //     if (this.tick >= 10000) {
    //       ob.complete();
    //     }
    //   }, 500);
    // });
    // setInterval(() => {
    //   this.observableService.data.next(this.tick);
    //   this.tick += 1000;
    //   if (this.tick >= 10000) {
    //     this.observableService.data.complete();
    //   }
    // }, 500);
    this.observableService.data.next(this.tick);
      this.tick += 1000;
  }
}

@Component({
  selector: 'obs2',
  template: `<div>
  <h1>obs2</h1>
  <div *ngFor='let e of values'>{{e}}</div>
</div>`,
})
export class Obs2 {
  values: Array<number> = new Array<number>();
  constructor(public observableService: ObservableService) {
    this.observableService.data.subscribe(
      (res) => {
        this.values.push(res);
      },
      (err) => {},
      () => {
        alert('end of observable');
      }
    );
  }
}
