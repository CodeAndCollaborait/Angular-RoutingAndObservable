import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from '../feature/features/features.component';
import { AboutObservableComponent } from '../feature/about-observable/about-observable.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'feature', component: FeaturesComponent },
  { path: 'observable', component: AboutObservableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
