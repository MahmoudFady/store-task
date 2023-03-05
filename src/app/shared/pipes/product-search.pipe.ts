import { IProductListItem } from './../models/product-list-item';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'productSearch',
  pure: false,
})
export class ProductSearchPipe implements PipeTransform {
  transform(products: IProductListItem[], target: string) {
    const filterdProducts = products.filter((product) => {
      const regExp = new RegExp(target, 'ig');
      const { title, category, price } = product;
      const criteria =
        regExp.test(title) ||
        regExp.test(category) ||
        regExp.test(price as unknown as string);
      return criteria;
    });
    return filterdProducts;
  }
}
