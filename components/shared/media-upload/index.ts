import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { ValidationProvider } from 'vee-validate';
import { MediaModel } from '~/api';

@Component({
  components: {
    ValidationProvider
  }
})
export default class MediaUploadComponent extends Vue {
  $refs!: {
    providerRef: InstanceType<typeof ValidationProvider>;
  };

  @Prop({ required: true, type: Array })
  private readonly value!: Array<MediaModel>;

  @Prop({ default: '', type: String })
  protected readonly rules!: string;

  @Prop({ default: false, type: Boolean })
  protected readonly readonly!: boolean;

  addMedia(files: Array<File>) {
    this.mediaFiles.push(...files.map(file => new MediaModel({ file })));
    this.emit();
  }

  get mediaFiles() {
    return this.value.map(m => new MediaModel(m));
  }

  getImageLink(file: MediaModel) {
    return file.getImageLink(this.$strapi);
  }

  async remove(idx: number) {
    if (this.mediaFiles[idx].id) {
      await this.mediaFiles[idx].remove(this);
    }
    this.mediaFiles.splice(idx, 1);
    this.emit();
  }

  async emit() {
    this.$emit('input', this.mediaFiles);
  }
}
