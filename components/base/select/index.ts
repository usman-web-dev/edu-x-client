import { Component, Prop } from 'nuxt-property-decorator';
import { ValidationProvider } from 'vee-validate';
import { VAutocomplete, VCombobox, VSelect } from 'vuetify/lib';
import { ApiParamsModel } from '~/api';
import { AnyObject, NormalizedPaginationResponse } from '~/utils';
import BaseInput from '../input';

type BaseSelectType = 'select' | 'autocomplete' | 'combobox';

@Component({
  components: {
    ValidationProvider,
    VAutocomplete,
    VCombobox,
    VSelect
  }
})
export default class BaseSelect extends BaseInput {
  @Prop({
    default: 'select',
    type: String,
    validator: (value?: BaseSelectType) => value === 'select' || value === 'autocomplete' || value === 'combobox'
  })
  private readonly type!: BaseSelectType;

  @Prop({
    type: Function
  })
  private readonly dataFunc?: () => Promise<NormalizedPaginationResponse<AnyObject>>;

  @Prop({
    type: Object
  })
  private readonly apiParams?: ApiParamsModel;

  data: Array<AnyObject> = [];

  get isEnd() {
    return this.apiParams ? this.apiParams.pagination.total === this.data.length : true;
  }

  get itemText(): string | undefined {
    return this.$attrs['item-text'];
  }

  get itemValue(): string | undefined {
    return this.$attrs['item-value'];
  }

  get items() {
    if (this.dataFunc) {
      return this.data;
    }

    return this.$attrs.items;
  }

  async fetch() {
    if (this.dataFunc && this.apiParams) {
      this.apiParams.enablePagination = true;
      const { data, pagination } = await this.dataFunc();

      this.data = [...this.data, ...data];
      this.apiParams.pagination = pagination;

      this.$emit('data-loaded', this.data);
    }
  }

  loadMore() {
    if (this.apiParams && !this.isEnd) {
      this.apiParams.pagination.page++;
      this.$fetch();
    }
  }
}
