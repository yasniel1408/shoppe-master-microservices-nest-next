import { BuyMoreThan0ProductError } from '../errors/buy-more-than0-product.error';
import { ProductCapacityError } from '../errors/product-capacity.error';
import { CurrencyType } from '../vo/currency-type.enum';
import { PriceVo } from '../vo/price.vo';
import { ResourceTypeVo } from '../vo/resource-type.vo';
import { Category } from './Category';
import { Store } from './Store';

export class Product {
  constructor(
    private readonly id: number,
    private name: string,
    private prices: PriceVo[],
    private quantity: number,
    private resources: ResourceTypeVo[],
    private description: string,
    private categories: Category[],
    private store: Store,
    private readonly createdAt: Date,
    private updatedAt: Date,
    private version: number = 0,
  ) {}

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPrices(): PriceVo[] {
    return this.prices;
  }

  getPrice(currency: CurrencyType): number {
    return this.prices
      .find((price) => price.getCurrency() === currency)
      .getValue();
  }

  getQuantity(): number {
    return this.quantity;
  }

  getResources(): ResourceTypeVo[] {
    return this.resources;
  }

  getDescription(): string {
    return this.description;
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getStore(): Store {
    return this.store;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  //---

  increaseVersion(): void {
    this.version = this.version + 1;
  }

  addQuantity(quantity: number): void {
    this.quantity += quantity;
    this.increaseVersion();
  }

  addPrice(price: PriceVo): void {
    this.prices.push(price);
    this.increaseVersion();
  }

  removePrice(currency: CurrencyType): void {
    this.prices = this.prices.filter(
      (price) => price.getCurrency() !== currency,
    );
    this.increaseVersion();
  }

  subtractQuantity(quantity: number): void {
    this.quantity -= quantity;
    this.increaseVersion();
  }

  moveToOtherStore(store: Store): void {
    this.store = store;
    this.increaseVersion();
  }

  setDescription(description: string): void {
    this.description = description;
    this.increaseVersion();
  }

  setCategories(categories: Category[]): void {
    this.categories = categories;
    this.increaseVersion();
  }

  setResources(resources: ResourceTypeVo[]): void {
    this.resources = resources;
    this.increaseVersion();
  }

  removeResource(resource: ResourceTypeVo): void {
    this.resources = this.resources.filter(
      (r) => r.getUrl() !== resource.getUrl(),
    );
    this.increaseVersion();
  }

  setName(name: string): void {
    this.name = name;
    this.increaseVersion();
  }

  setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
    this.increaseVersion();
  }

  setPrices(prices: PriceVo[]): void {
    this.prices = prices;
    this.increaseVersion();
  }

  buyProduct(quantity: number): void {
    if (quantity <= 0) {
      throw new BuyMoreThan0ProductError();
    }
    if (quantity > this.quantity) {
      throw new ProductCapacityError();
    }
    this.subtractQuantity(quantity);
    this.increaseVersion();
  }

  addCategory(category: Category): void {
    this.categories.push(category);
    category.associateProduct(this);
    this.increaseVersion();
  }

  removeCategory(category: Category): void {
    this.categories = this.categories.filter(
      (c) => c.getId() !== category.getId(),
    );
    category.disassociateProduct(this);
    this.increaseVersion();
  }
}
