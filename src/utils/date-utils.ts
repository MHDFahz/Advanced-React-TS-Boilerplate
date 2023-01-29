import moment from 'moment';
import 'moment-timezone';

const DubaiTimezone = 'Asia/Dubai';

export const formatDate = (date: string | Date, dateFormat: string): string => {
  return moment(date).format(dateFormat);
};
export const formatUTCDate = (
  date: string | Date,
  dateFormat: string
): string => {
  return moment(date).utc().format(dateFormat);
};

export const convertToTimezone = (
  date: Date,
  timezone: string = DubaiTimezone
) => {
  return moment(date).tz(timezone).toDate();
};

export const formatDateWithTimeZone = (
  date: string | Date,
  timezone: string = DubaiTimezone,
  dateFormat: string = DateFormats.NormalFromat
) => {
  return moment(date).tz(timezone).format(dateFormat);
};

export const tryFormatDate = (
  date: string | Date,
  dateFormat: string = DateFormats.NormalFromat
): string | Date => {
  try {
    return formatDate(date, dateFormat);
  } catch (e) {
    return date;
  }
};

export const tryFormatDateWithTimezone = (
  date: string | Date,
  timezone: string = DubaiTimezone,
  dateFormat: string = DateFormats.NormalFromat
): string | Date => {
  try {
    return formatDateWithTimeZone(date, timezone, dateFormat);
  } catch (e) {
    return date;
  }
};

export class DateFormats {
  static NormalFromat = 'DD-MM-YYYY h:mm A';
  static MonthNameFormat = 'DD-MMM-YYYY';
  static MonthNameOnly = 'MMM';
  static TimeOnlyFormat = 'h:mm A';
}

export const addDays = (date: Date, days: number) => {
  return moment(date).add(days, 'days').toDate();
};

export const getUTCStartOfDate = (date: Date): Date => {
  return new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
};
