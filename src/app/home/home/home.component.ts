import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  displayHome: boolean = true;
  displayFeature: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.displayHome = true;
  }

  homeClick() {
    this.displayHome = !this.displayHome;
    this.displayFeature = false;
  }

  featureClick() {
    this.displayHome = false;
    this.displayFeature = !this.displayFeature;
  }
}
