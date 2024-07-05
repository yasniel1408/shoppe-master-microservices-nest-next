import { BaseDomainError } from './base-domain.error';

export class ProductCapacityError extends BaseDomainError {
  constructor() {
    super('You cannot sell more products than exist in stores.');
  }
}
