import { Component, Prop, Vue } from 'nuxt-property-decorator';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

@Component({
  components: {
    vueDropzone: () => {
      if (process.client) {
        // @ts-ignore
        return import('vue2-dropzone');
      }
    }
  }
})
export default class DragDropUploadComponent extends Vue {
  $refs!: {
    dragDropUploadRef: any;
  };

  @Prop({ default: 100, type: Number })
  private readonly maxFiles!: number;

  @Prop({ type: String })
  protected readonly label!: string;

  dropzoneOptions = {
    url: 'https://httpbin.org/post',
    autoProcessQueue: false,
    addRemoveLinks: true,
    maxFiles: this.maxFiles,
    uploadMultiple: true,
    maxFilesize: 200,
    dictFileTooBig: 'Max file upload limit is {{maxFilesize}}MB'
  };

  addFile(e: File | Array<File>) {
    this.$emit('input', Array.isArray(e) ? e : [e]);
    this.removeAllFiles();
  }
  removeAllFiles() {
    this.$refs.dragDropUploadRef.removeAllFiles(true);
  }
}
