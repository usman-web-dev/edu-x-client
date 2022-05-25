import { Component, Vue, Watch } from 'nuxt-property-decorator';
import { ApiParamsModel, UserModel } from '~/api';
import { ListingAction, OverrideListingAction, RoleType } from '~/utils';

@Component({
  middleware: [
    'isAdmin',
    ({ error, params: { role } }) => {
      if (!Object.values(RoleType).includes(+role)) {
        error({ message: `Wrong path, 'type' is missing`, statusCode: 404 });
      }
    }
  ]
})
export default class UsersView extends Vue {
  get userType(): RoleType {
    return +(this.$route.params.role as string);
  }

  apiParams = new ApiParamsModel<UserModel>({
    filters: {
      role: {
        id: {
          $eq: this.userType
        }
      }
    }
  });

  @Watch('$route.params')
  onRouteChange() {
    this.apiParams = new ApiParamsModel<UserModel>({
      filters: {
        role: {
          id: {
            $eq: this.$route.params.role
          }
        }
      }
    });
  }

  get title() {
    return this.$helpers.titleize(this.$helpers.getUserTypeFromNumber(this.userType, true));
  }

  get subtitle() {
    return `All ${this.title.toLocaleLowerCase()} here`;
  }

  actions: Array<ListingAction> = [
    {
      name: 'send-email-confirmation',
      color: 'primary',
      icon: 'mdi-email-fast-outline',
      text: 'Send Email Confirmation'
    }
  ];

  overrideActions({ confirmed }: UserModel): Array<OverrideListingAction> {
    if (confirmed) {
      return [
        {
          name: 'send-email-confirmation',
          hide: true
        }
      ];
    }

    return this.actions;
  }

  async sendEmailConfirmation({ email }: UserModel) {
    this.$nuxt.$loading.start();
    try {
      await this.$strapi.sendEmailConfirmation({ email });
      this.$alert.show('Email confirmation sent.');
    } catch {
    } finally {
      this.$nuxt.$loading.finish();
    }
  }
}
