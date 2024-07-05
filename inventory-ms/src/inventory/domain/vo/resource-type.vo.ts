import { URLValidationError } from '../errors/url.error';
import { ResourceType } from './resource-type.enum';

export class ResourceTypeVo {
  private readonly type: ResourceType;
  private readonly url: string;

  constructor(type: ResourceType, url: string) {
    this.type = type;
    if (!this.isValidUrl(url)) {
      throw new URLValidationError();
    }
    this.url = url;
  }

  isValidUrl = (inputUrl) => {
    try {
      // Verificar si la URL se puede parsear correctamente
      new URL(inputUrl);

      // Expresión regular para validar la estructura básica de una URL
      const urlPattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocolo
          '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.?)+[a-zA-Z]{2,}|' + // dominio
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // dirección IP (v4)
          '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' + // puerto y ruta
          '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' + // cadena de consulta
          '(\\#[-a-zA-Z\\d_]*)?$',
        'i',
      ); // fragmento

      return urlPattern.test(inputUrl);
    } catch (err) {
      return false;
    }
  };

  getType(): ResourceType {
    return this.type;
  }

  getUrl(): string {
    return this.url;
  }
}
