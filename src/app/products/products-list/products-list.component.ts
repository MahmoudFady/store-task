import { IProductListItem } from './../../shared/models/product-list-item';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products!: IProductListItem[];
  searchTarget = '';
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getPorudctList(10);
    this.productService.getUpdatedProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
    });
  }
}
