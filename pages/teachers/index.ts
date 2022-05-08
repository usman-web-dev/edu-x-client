import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, UserModel } from '~/api';
import { ListingAction, OverrideListingAction, RoleType } from '~/utils';

@Component
export default class TeachersView extends Vue {
  apiParams = new ApiParamsModel<UserModel>({
    filters: {
      role: {
        id: {
          $eq: RoleType.TEACHER
        }
      }
    }
  });

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
