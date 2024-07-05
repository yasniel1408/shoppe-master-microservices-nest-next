export abstract class BaseDomainError extends Error {
  constructor(message: string) {
    super(message);
  }
}
