export interface ProductOutPort<T> {
  getProducts(): Promise<T[]>;
  getProductById(id: number): Promise<T>;
  createProduct(item: T): Promise<T>;
  updateProduct(id: number, item: T): Promise<T>;
  deleteProduct(id: number): Promise<T>;
}
