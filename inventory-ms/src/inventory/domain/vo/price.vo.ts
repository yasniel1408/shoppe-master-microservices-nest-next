import { CurrencyType } from './currency-type.enum';

export class PriceVo {
  constructor(
    private readonly value: number,
    private readonly currency: CurrencyType,
    private readonly discount?: number,
    private readonly discountPercent?: number,
  ) {}

  getValue(): number {
    return this.value;
  }

  getCurrency(): CurrencyType {
    return this.currency;
  }

  getDiscount(): number {
    return this.discount;
  }

  getDiscountPercent(): number {
    return this.discountPercent;
  }
}
