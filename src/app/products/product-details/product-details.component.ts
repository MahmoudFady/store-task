import { ActivatedRoute } from '@angular/router';
import { IProductDetails } from './../../shared/models/product-details';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: IProductDetails;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.productService.getProudctDetails(+params['id']).subscribe({
          next: (product) => {
            this.product = product;
          },
        });
      },
    });
  }
}
