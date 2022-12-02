import * as moment from 'moment';

export function dateFormat(date: Date, format: string) : string {
    return moment(date).format(format);
}