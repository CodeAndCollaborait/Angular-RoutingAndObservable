import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from '../feature/features/features.component';
import { AboutObservableComponent } from '../feature/about-observable/about-observable.component';
@NgModule({
  declarations: [HomeComponent, FeaturesComponent, AboutObservableComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
