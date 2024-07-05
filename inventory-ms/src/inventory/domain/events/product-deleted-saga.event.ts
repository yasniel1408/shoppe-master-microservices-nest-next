export const ProductDeletedEventSAGA = 'product-deleted-SAGA';

export class ProductDeletedSAGA {
  constructor(public readonly id: number) {}
}
