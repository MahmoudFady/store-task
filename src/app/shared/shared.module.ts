import { ProductSearchPipe } from './pipes/product-search.pipe';
import { TextCutPipe } from './pipes/text-cut.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [TextCutPipe, ProductSearchPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextCutPipe,
    ProductSearchPipe,
  ],
})
export class SharedModule {}
