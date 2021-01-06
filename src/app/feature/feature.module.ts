import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeaturesComponent } from './features/features.component';
import { AboutObservableComponent } from './about-observable/about-observable.component';

@NgModule({
  declarations: [FeaturesComponent, AboutObservableComponent],
  imports: [CommonModule, FeatureRoutingModule],
})
export class FeatureModule {}
