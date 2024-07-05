export interface BaseSpecification<T> {
  isSatisfiedBy(candidate: T): boolean;
}
