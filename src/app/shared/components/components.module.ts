import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ChipComponent } from './chip/chip.component';
import { CommentComponent } from './comment/comment.component';

const Components = [
  HeaderComponent,
  CardComponent,
  ChipComponent,
  FiltersComponent,
  CommentComponent
];

@NgModule({
  declarations: [Components],
  imports: [CommonModule],
  exports: [Components],
})
export class ComponentsModule { }
