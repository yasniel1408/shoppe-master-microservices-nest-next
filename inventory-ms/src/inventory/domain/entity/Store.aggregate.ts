import { LocationVo } from '../vo/location.vo';
import { Category } from './Category';
import { Product } from './Product';

export class StoreAggregate {
  constructor(
    private readonly id: number,
    private name: string,
    private address: string,
    private location: LocationVo,
    private description: string,
    private products: Product[],
    private categories: Category[],
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

  getAddress(): string {
    return this.address;
  }

  getDescription(): string {
    return this.description;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getLocation(): LocationVo {
    return this.location;
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

  setLocation(location: LocationVo): void {
    this.location = location;
    this.increaseVersion();
  }

  addProduct(product: Product): void {
    this.products.push(product);
    product.moveToOtherStore(this);
    this.increaseVersion();
  }

  removeProduct(productId: number): void {
    this.products = this.products.filter(
      (product) => product.getId() !== productId,
    );
    this.increaseVersion();
  }

  buyProduct(productId: number, quantity: number): void {
    const product = this.products.find(
      (product) => product.getId() === productId,
    );
    if (product) {
      product.buyProduct(quantity);
    }
    this.increaseVersion();
  }

  addCategory(category: Category): void {
    this.categories.push(category);
    this.increaseVersion();
  }

  removeCategory(categoryId: number): void {
    this.categories = this.categories.filter(
      (category) => category.getId() !== categoryId,
    );
    this.increaseVersion();
  }

  setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
    this.increaseVersion();
  }

  setName(name: string): void {
    this.name = name;
    this.increaseVersion();
  }

  setAddress(address: string): void {
    this.address = address;
    this.increaseVersion();
  }

  setDescription(description: string): void {
    this.description = description;
    this.increaseVersion();
  }
}
