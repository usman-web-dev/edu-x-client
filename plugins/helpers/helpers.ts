import { format } from 'date-fns';
import { ApiParamsModel } from '~/api';
import { AnyObject, Role, RoleType } from '~/utils';

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

  deserializeQuery<T extends object = AnyObject>(query: string): T {
    const queryStringPieces = query.replace(/\[([^\]]+)\]/g, '.$1').split('&');
    const decodedQueryString = {} as T;

    for (const piece of queryStringPieces) {
      let [key, value] = piece.split('=');
      value = value || '';
      if (this.hasNested(decodedQueryString, key)) {
        const currentValueForKey = this.getNested(decodedQueryString, key);
        if (!Array.isArray(currentValueForKey)) {
          this.setNested(decodedQueryString, key, [currentValueForKey, value]);
        } else {
          currentValueForKey.push(value);
        }
      } else {
        this.setNested(decodedQueryString, key, value);
      }
    }
    return decodedQueryString;
  }

  isObject(obj: AnyObject) {
    return null !== obj && typeof obj === 'object' && Object.getPrototypeOf(obj).isPrototypeOf(Object);
  }

  getNested(obj: AnyObject, path: string, defaultValue?: any) {
    return path.split('.').reduce((a, c) => (a && a[c] ? a[c] : defaultValue), obj);
  }

  setNested(obj: AnyObject, path: string, value: any) {
    const pList = Array.isArray(path) ? path : path.split('.');
    const len = pList.length;
    for (let i = 0; i < len - 1; i++) {
      const elem = pList[i];
      if (!obj[elem] || !this.isObject(obj[elem])) {
        obj[elem] = {};
      }
      obj = obj[elem];
    }

    obj[pList[len - 1]] = value;
  }

  hasNested(src: AnyObject, path: Array<string> | string = []) {
    let _path = Array.isArray(path) ? path.slice() : (path || '').split('.'),
      o = src,
      idx = 0;

    if (_path.length === 0) {
      return false;
    }

    for (idx = 0; idx < _path.length; idx++) {
      const key = _path[idx];

      if (o != null && o.hasOwnProperty(key)) {
        o = o[key];
      } else {
        return false;
      }
    }
    return true;
  }

  formatDate(date: Date | string) {
    return format(new Date(date), 'do MMM, yyyy');
  }

  getUserTypeFromNumber(type: RoleType, plural = false): string {
    let roleToReturn = '';

    if (type === RoleType.ADMIN) {
      roleToReturn = Role.ADMIN;
    } else if (type === RoleType.STUDENT) {
      roleToReturn = Role.STUDENT;
    } else if (type === RoleType.TEACHER) {
      roleToReturn = Role.TEACHER;
    }

    return roleToReturn ? `${roleToReturn}${plural ? 's' : ''}` : '';
  }
}

export const helpers = new Helpers();
