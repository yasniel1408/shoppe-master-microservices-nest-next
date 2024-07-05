import { BaseDomainError } from './base-domain.error';

export class LatitudeError extends BaseDomainError {
  constructor() {
    super('Latitude must be between -90 and 90 degrees.');
  }
}
