import { BaseDomainError } from './base-domain.error';

export class BuyMoreThan0ProductError extends BaseDomainError {
  constructor() {
    super('You cannot buy 0 products');
  }
}
