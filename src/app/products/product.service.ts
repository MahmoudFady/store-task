import { IProductDetails } from './../shared/models/product-details';
import { environment } from './../../environments/environment';
import { Subject } from 'rxjs/internal/Subject';
import { IProductListItem } from './../shared/models/product-list-item';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class ProductService {
  private products$ = new Subject<IProductListItem[]>();
  private updatedProducts: IProductListItem[] = [];
  private readonly baseUrl = environment.BACKEND_BASE_URL + 'products/';
  constructor(private http: HttpClient) {}
  getPorudctList(limit: number) {
    const endPoint = `${this.baseUrl}?limit=${limit}`;
    this.http.get<IProductListItem[]>(endPoint).subscribe({
      next: (products) => {
        this.updatedProducts = products;
        this.products$.next(this.updatedProducts);
      },
      error: () => {
        this.updatedProducts = [];
        this.products$.error('faild to get products');
      },
    });
  }
  addProduct(
    title: string,
    description: string,
    category: string,
    price: number,
    image: File
  ) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price as unknown as string);
    formData.append('image', image);
    const endPoint = this.baseUrl;
    this.http.post<{ id: number }>(endPoint, formData).subscribe({
      next: (data) => {
        this.updatedProducts.unshift({ id: data.id, title, price, category });
        this.products$.next(this.updatedProducts);
      },
      error: () => {
        this.products$.error('faild to add new product');
      },
    });
  }
  getProudctDetails(id: number) {
    const endPoint = this.baseUrl + id;
    return this.http.get<IProductDetails>(endPoint);
  }
  getUpdatedProducts() {
    return this.products$.asObservable();
  }
}
