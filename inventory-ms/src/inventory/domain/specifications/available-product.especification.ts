import { Product } from '../entity/Product';
import { BaseSpecification } from './base.especification';

export class AvailableProductSpecification
  implements BaseSpecification<Product>
{
  isSatisfiedBy(candidate: Product): boolean {
    return candidate.getQuantity() > 0;
  }
}
