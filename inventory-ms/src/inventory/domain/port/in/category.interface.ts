export interface CategoryInPort<T> {
  getCategories(): Promise<T[]>;
  getCategoryById(id: number): Promise<T>;
  createCategory(item: T): Promise<T>;
  updateCategory(id: number, item: T): Promise<T>;
  deleteCategory(id: number): Promise<T>;
}
