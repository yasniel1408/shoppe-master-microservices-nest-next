import { ResourceTypeVo } from '../vo/resource-type.vo';
import { Product } from './Product';

export class Category {
  constructor(
    private readonly id: number,
    private name: string,
    private imgUrl: ResourceTypeVo,
    private description: string,
    private readonly createdAt: Date,
    private updatedAt: Date,
    private version: number = 0,
    private products: Product[] = [],
  ) {
    this.version = 0;
    this.imgUrl = new ResourceTypeVo(imgUrl.getType(), imgUrl.getUrl());
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getImgUrl(): ResourceTypeVo {
    return this.imgUrl;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  getProducts(): Product[] {
    return this.products;
  }

  //---

  increaseVersion(): void {
    this.version = this.version + 1;
  }

  setName(name: string): void {
    this.name = name;
    this.increaseVersion();
  }

  setDescription(description: string): void {
    this.description = description;
    this.increaseVersion();
  }

  setImgUrl(imgUrl: ResourceTypeVo): void {
    this.imgUrl = imgUrl;
    this.increaseVersion();
  }

  setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
    this.increaseVersion();
  }

  associateProduct(product: Product): void {
    if (!this.products.includes(product)) {
      this.products.push(product);
      product.addCategory(this);
      this.increaseVersion();
    }
  }

  disassociateProduct(product: Product): void {
    this.products = this.products.filter((p) => p.getId() !== product.getId());
    product.removeCategory(this);
    this.increaseVersion();
  }
}
