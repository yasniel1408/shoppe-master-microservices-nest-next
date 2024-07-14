import { Category } from './entity/Category';
import { Product } from './entity/Product';
import { StoreAggregate } from './entity/Store.aggregate';
import { ProductBuilder } from './product.builder';
import { PriceVo } from './vo/price.vo';
import { ResourceTypeVo } from './vo/resource-type.vo';

export class ProductFactory {
  createProduct(
    id: number,
    name: string,
    prices: PriceVo[],
    quantity: number,
    resources: ResourceTypeVo[],
    description: string,
    categories: Category[],
    store: StoreAggregate,
    createdAt: Date,
    updatedAt: Date,
    version: number = 0,
  ): Product {
    const builder = new ProductBuilder();
    return builder
      .setId(id)
      .setName(name)
      .setPrices(prices)
      .setQuantity(quantity)
      .setResources(resources)
      .setDescription(description)
      .setCategories(categories)
      .setStore(store)
      .setCreatedAt(createdAt)
      .setUpdatedAt(updatedAt)
      .setVersion(version)
      .build();
  }

  createProducts(
    productsData: {
      id: number;
      name: string;
      prices: PriceVo[];
      quantity: number;
      resources: ResourceTypeVo[];
      description: string;
      categories: Category[];
      store: StoreAggregate;
      createdAt: Date;
      updatedAt: Date;
      version?: number;
    }[],
  ): Product[] {
    return productsData.map((data) =>
      this.createProduct(
        data.id,
        data.name,
        data.prices,
        data.quantity,
        data.resources,
        data.description,
        data.categories,
        data.store,
        data.createdAt,
        data.updatedAt,
        data.version ?? 0,
      ),
    );
  }
}
