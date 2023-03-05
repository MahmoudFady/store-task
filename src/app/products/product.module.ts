import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list/products-list.component';
const routes = [
  {
    path: '',
    component: ProductsListComponent,
    children: [
      {
        path: 'add',
        component: AddProductComponent,
      },
      {
        path: ':id',
        component: ProductDetailsComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    AddProductComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class ProductModule {}
