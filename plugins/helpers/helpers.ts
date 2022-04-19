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

  titleize(text: string): string {
    return this.unslugify(text)
      .toLowerCase()
      .replace(/(?:^|\s|-)\S/g, x => x.toUpperCase());
  }
}

export const helpers = new Helpers();
