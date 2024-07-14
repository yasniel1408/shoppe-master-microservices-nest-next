import { Category } from '../entity/Category';
import { StoreAggregate } from '../entity/Store.aggregate';
import { PriceVo } from '../vo/price.vo';
import { ResourceTypeVo } from '../vo/resource-type.vo';

export const ProductCreatedEvent = 'product-created';

export class ProductCreated {
  constructor(
    private readonly id: number,
    private readonly name: string,
    private prices: PriceVo[],
    private quantity: number,
    private resources: ResourceTypeVo[],
    private readonly description: string,
    private readonly category: Category,
    private readonly store: StoreAggregate,
    private readonly createdAt: Date,
    private readonly updatedAt: Date,
  ) {}
}
