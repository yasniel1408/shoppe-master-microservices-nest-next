import { Category } from './entity/Category';
import { Product } from './entity/Product';
import { StoreAggregate } from './entity/Store.aggregate';
import { PriceVo } from './vo/price.vo';
import { ResourceTypeVo } from './vo/resource-type.vo';

export class ProductBuilder {
  private id: number;
  private name: string;
  private prices: PriceVo[] = [];
  private quantity: number = 0;
  private resources: ResourceTypeVo[] = [];
  private description: string = '';
  private categories: Category[] = [];
  private store: StoreAggregate;
  private createdAt: Date = new Date();
  private updatedAt: Date = new Date();
  private version: number = 0;

  setId(id: number): ProductBuilder {
    this.id = id;
    return this;
  }

  setName(name: string): ProductBuilder {
    this.name = name;
    return this;
  }

  setPrices(prices: PriceVo[]): ProductBuilder {
    this.prices = prices;
    return this;
  }

  setQuantity(quantity: number): ProductBuilder {
    this.quantity = quantity;
    return this;
  }

  setResources(resources: ResourceTypeVo[]): ProductBuilder {
    this.resources = resources;
    return this;
  }

  setDescription(description: string): ProductBuilder {
    this.description = description;
    return this;
  }

  setCategories(categories: Category[]): ProductBuilder {
    this.categories = categories;
    return this;
  }

  setStore(store: StoreAggregate): ProductBuilder {
    this.store = store;
    return this;
  }

  setCreatedAt(createdAt: Date): ProductBuilder {
    this.createdAt = createdAt;
    return this;
  }

  setUpdatedAt(updatedAt: Date): ProductBuilder {
    this.updatedAt = updatedAt;
    return this;
  }

  setVersion(version: number): ProductBuilder {
    this.version = version;
    return this;
  }

  build(): Product {
    return new Product(
      this.id,
      this.name,
      this.prices,
      this.quantity,
      this.resources,
      this.description,
      this.categories,
      this.store,
      this.createdAt,
      this.updatedAt,
      this.version,
    );
  }
}
