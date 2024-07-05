import { BaseDomainError } from './base-domain.error';

export class LongitudeError extends BaseDomainError {
  constructor() {
    super('Longitude must be between -180 and 180 degrees.');
  }
}
