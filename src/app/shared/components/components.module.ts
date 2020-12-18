import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FiltersComponent } from './filters/filters.component';

const Components = [HeaderComponent, CardComponent,FiltersComponent];

@NgModule({
  declarations: [Components],
  imports: [CommonModule],
  exports: [Components],
})
export class ComponentsModule {}
