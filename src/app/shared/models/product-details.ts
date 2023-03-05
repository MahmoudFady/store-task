import { IProductListItem } from './product-list-item';
export interface IProductDetails extends IProductListItem {
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
