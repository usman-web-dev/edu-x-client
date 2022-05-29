import { Context } from '@nuxt/types';
import { format, parseISO } from 'date-fns';
import { ApiParamsModel, UserModel } from '~/api';
import { AnyObject, AssessmentType, InstituteType, Role, RoleType } from '~/utils';

export class Helpers {
  $context!: Context;

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

  formatDate(date: Date | string, dateFormat?: string, withTime = false) {
    return format(new Date(date), dateFormat ?? `do MMM, yyyy${withTime ? ' h:mm a' : ''}`);
  }

  formatTime(date: string, time: string) {
    return this.formatDate(`${date}T${time}`, 'h:mm a');
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

  hasRole(role: RoleType, user: UserModel = this.$context.$strapi.user as any) {
    return user?.role?.id === role;
  }

  get isAdmin() {
    return this.hasRole(RoleType.ADMIN);
  }

  get isTeacher() {
    return this.hasRole(RoleType.TEACHER);
  }

  get isStudent() {
    return this.hasRole(RoleType.STUDENT);
  }

  instituteHasType(type: InstituteType) {
    const { institute } = this.$context.$strapi.user as unknown as UserModel;

    return institute.type === type;
  }

  get isSchool() {
    return this.instituteHasType(InstituteType.SCHOOL);
  }

  get isUniversity() {
    return this.instituteHasType(InstituteType.UNIVERSITY);
  }

  enumToItems<T extends object>(data: T) {
    return Object.values(data).map(id => ({ id, value: this.titleize(id) }));
  }

  get assessmentTypes() {
    return this.enumToItems(
      this.isSchool
        ? [AssessmentType.HOMEWORK, AssessmentType.PAPER]
        : [AssessmentType.ASSIGNMENT, AssessmentType.EXAM, AssessmentType.QUIZ]
    );
  }

  getDate(date: Date | null, onlyTime = false) {
    if (!date) {
      return null;
    }

    return this.formatDate(parseISO(new Date(date).toISOString()), onlyTime ? 'HH:mm:ss' : 'yyyy-MM-dd');
  }
}

export const helpers = new Helpers();
