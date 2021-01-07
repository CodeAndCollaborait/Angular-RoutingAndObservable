import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-about-observable',
  templateUrl: './about-observable.component.html',
  styleUrls: ['./about-observable.component.css'],
})
export class AboutObservableComponent implements OnInit {
  demoObserve = new Observable((numbers) => {
    numbers.next('11');
    numbers.next('22');
    numbers.next('33');
    numbers.complete();
  });

  constructor() {}

  ngOnInit(): void {

    //Call the observable 
    this.demoObserve.subscribe((num) => {
      console.log(num);
    });
  
  }
}
