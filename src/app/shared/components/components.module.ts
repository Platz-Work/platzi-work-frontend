import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

const Components = [HeaderComponent, CardComponent];

@NgModule({
  declarations: [Components],
  imports: [CommonModule],
  exports: [Components],
})
export class ComponentsModule {}
