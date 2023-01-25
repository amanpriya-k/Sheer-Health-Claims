import { format, parseISO } from 'date-fns';

export function formatDate(date) {
  return format(new Date(parseISO(date)), 'PPP');
}
