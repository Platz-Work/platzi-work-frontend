import { ComponentsModule } from './../../shared/components/components.module';
import { LandingComponent } from './landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, LandingRoutingModule, ComponentsModule],
})
export class LandingModule {}
