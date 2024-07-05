import { BaseDomainError } from './base-domain.error';

export class URLValidationError extends BaseDomainError {
  constructor() {
    super('Invalid URL');
  }
}
