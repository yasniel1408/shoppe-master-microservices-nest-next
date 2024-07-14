export interface StoreOutPort<T> {
  getStores(): Promise<T[]>;
  getStoreById(id: number): Promise<T>;
  createStore(item: T): Promise<T>;
  updateStore(id: number, item: T): Promise<T>;
  deleteStore(id: number): Promise<T>;
}
