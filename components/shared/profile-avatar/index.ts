import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class ProfileAvatar extends Vue {
  get Initials(): string {
    return this.$strapi.user?.username[0].toUpperCase();
  }
}
