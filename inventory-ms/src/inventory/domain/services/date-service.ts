import { addDays, format, isValid, parse, subDays } from 'date-fns';

export class DateService {
  /**
   * Formatea una fecha a un string en el formato especificado.
   * @param {Date | number} date - La fecha a formatear.
   * @param {string} dateFormat - El formato deseado.
   * @returns {string} - La fecha formateada.
   */
  formatDate(date, dateFormat) {
    if (!isValid(new Date(date))) {
      throw new Error('Invalid date');
    }
    return format(date, dateFormat);
  }

  /**
   * Parsea un string de fecha a un objeto Date.
   * @param {string} dateString - El string de fecha a parsear.
   * @param {string} dateFormat - El formato del string de fecha.
   * @returns {Date} - El objeto Date.
   */
  parseDate(dateString, dateFormat) {
    const parsedDate = parse(dateString, dateFormat, new Date());
    if (!isValid(parsedDate)) {
      throw new Error('Invalid date format');
    }
    return parsedDate;
  }

  /**
   * Agrega días a una fecha.
   * @param {Date | number} date - La fecha base.
   * @param {number} days - La cantidad de días a agregar.
   * @returns {Date} - La nueva fecha.
   */
  addDaysToDate(date, days) {
    if (!isValid(new Date(date))) {
      throw new Error('Invalid date');
    }
    return addDays(date, days);
  }

  /**
   * Resta días a una fecha.
   * @param {Date | number} date - La fecha base.
   * @param {number} days - La cantidad de días a restar.
   * @returns {Date} - La nueva fecha.
   */
  subDaysFromDate(date, days) {
    if (!isValid(new Date(date))) {
      throw new Error('Invalid date');
    }
    return subDays(date, days);
  }
}

// Ejemplo de uso
// const dateService = new DateService();

// try {
//   const date = new Date();
//   const formattedDate = dateService.formatDate(date, 'yyyy-MM-dd');
//   console.log(`Formatted Date: ${formattedDate}`);

//   const dateString = '2024-06-25';
//   const parsedDate = dateService.parseDate(dateString, 'yyyy-MM-dd');
//   console.log(`Parsed Date: ${parsedDate}`);

//   const newDate = dateService.addDaysToDate(date, 5);
//   console.log(`Date after adding 5 days: ${newDate}`);

//   const subtractedDate = dateService.subDaysFromDate(date, 5);
//   console.log(`Date after subtracting 5 days: ${subtractedDate}`);
// } catch (error) {
//   console.error(error.message);
// }
