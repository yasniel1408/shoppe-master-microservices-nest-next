import { LongitudeError } from '../errors/longitude.error';
import { LatitudeError } from '../errors/latitude.error';

export class LocationVo {
  constructor(
    private readonly latitude: number,
    private readonly longitude: number,
  ) {
    this.validateLatitude(latitude);
    this.validateLongitude(longitude);
  }

  private validateLatitude(latitude: number): void {
    if (latitude < -90 || latitude > 90) {
      throw new LatitudeError();
    }
  }

  private validateLongitude(longitude: number): void {
    if (longitude < -180 || longitude > 180) {
      throw new LongitudeError();
    }
  }

  getLatitude(): number {
    return this.latitude;
  }

  getLongitude(): number {
    return this.longitude;
  }
}
