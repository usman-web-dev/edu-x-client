import { Strapi } from '@nuxtjs/strapi';
import Vue from 'vue';
import { BaseModel } from '../base.model';

export class MediaModel extends BaseModel {
  id!: number;
  name!: string;
  hash!: string;
  ext!: string;
  url!: string;
  mime!: string;
  file: File | null = null;

  get mimeType() {
    return this.mime ?? this.file?.type ?? '';
  }

  get fileName() {
    return this.name ?? this.file?.name ?? '';
  }

  getImageLink({ $http }: Strapi) {
    if (this === undefined || !this.mimeType.includes('image')) {
      return;
    }

    if (!this.file && this.url) {
      return this.url.includes('http') ? this.url : `${$http.getBaseURL().replace('/api', '')}${this.url}`;
    } else if (this.file) {
      return URL.createObjectURL(this.file);
    }
  }

  async download({ media }: Vue['$api']) {
    let file = this.file;
    if (!file) {
      file = await media.download(this);
    }
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `${this.fileName}`;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
  }

  async remove({ $confirm, $api: { media }, $nuxt: { $loading }, $alert }: Vue) {
    if (this.id && (await $confirm.confirm('Delete Confirmation', 'Are you sure you want to delete this file?'))) {
      $loading.start();
      try {
        media.delete(this);
        $alert.show('File has been deleted.');
      } catch {
      } finally {
        $loading.finish();
      }
    }
  }

  constructor(data?: Partial<MediaModel>) {
    super();
    Object.assign(this, data);
  }
}
