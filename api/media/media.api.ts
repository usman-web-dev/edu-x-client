import { StrapiData } from '~/utils';
import { BaseApi } from '../base.api';
import { MediaModel } from './media.model';

class MediaApi extends BaseApi {
  async upload(media: Array<MediaModel>, refId: number, ref: string, field: string): Promise<MediaModel> {
    if (!media.filter(({ file }) => file).length) {
      return [] as any;
    }

    const formData = new FormData();

    formData.append('refId', `${refId}`);
    formData.append('ref', ref);
    formData.append('field', field);

    media
      .filter(({ file }) => file)
      .forEach(({ file }) => {
        formData.append('files', file!, file!.name);
      });

    return this.mergeData(await this.$strapi.$http.$post<StrapiData<MediaModel>>('/upload', formData));
  }

  async download({ url, mime, name }: MediaModel) {
    const data: Blob = await this.$strapi.$http.$get(`${this.$strapi.$http.getBaseURL().replace('/api', '')}${url}`);

    return new File([data], name, { type: mime });
  }

  async delete({ id }: MediaModel) {
    return this.$strapi.$http.$delete(`/upload/files/${id}`);
  }
}

export const media = new MediaApi();
