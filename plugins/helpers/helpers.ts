import { format } from 'date-fns';
import { ApiParamsModel } from '~/api';
import { AnyObject } from '~/utils';

class Helpers {
  upperFirst(text?: string) {
    return (text?.charAt(0).toUpperCase() ?? '') + text?.slice(1);
  }

  slugify(text?: string) {
    return (text ?? '')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  unslugify(text?: string) {
    return (text ?? '').replace(/-/g, ' ').replace(/\w\S*/g, str => this.upperFirst(str));
  }

  titleize(text?: string): string {
    return this.unslugify(text)
      .toLowerCase()
      .replace(/(?:^|\s|-)\S/g, x => x.toUpperCase());
  }

  serializeQuery(params: AnyObject, prefix = '') {
    const query: Array<string> = Object.keys(params).map(key => {
      const value = params[key as keyof ApiParamsModel];

      if (params.constructor === Array) key = `${prefix}[]`;
      else if (params.constructor === Object) key = prefix ? `${prefix}[${key}]` : key;

      if (typeof value === 'object') return this.serializeQuery(value, key);
      else return `${key}=${encodeURIComponent(value)}`;
    });

    return ([] as Array<string>).concat.apply([], query).join('&');
  }

  formatDate(date: Date | string) {
    return format(new Date(date), 'do MMM, yyyy');
  }
}

export const helpers = new Helpers();
