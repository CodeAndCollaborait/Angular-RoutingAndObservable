import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from '../feature/features/features.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'feature', component: FeaturesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
