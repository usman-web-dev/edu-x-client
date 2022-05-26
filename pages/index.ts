import { init, send } from '@emailjs/browser';
import { Component, Vue } from 'nuxt-property-decorator';
import { AnyObject } from '~/utils';

@Component({
  layout: 'guest'
})
export default class HomeView extends Vue {
  contactDetails = [
    {
      title: 'Customer Support',
      value: '+92 317 4306405'
    },
    {
      title: 'Email Address',
      value: 'me@usman-dev.com'
    },
    {
      title: 'Office Address',
      value: '1.5 KM Defence Rd, off Raiwand Road, Lahore'
    }
  ];

  contactData: AnyObject = {};

  initContactData() {
    this.contactData = {
      email: '',
      name: '',
      instituteName: '',
      subject: '',
      message: ''
    };
  }

  loading = false;

  created() {
    this.initContactData();
    init('user_ODReVbn3ykbuwByqUoI2J');
  }

  async sendMessage() {
    this.loading = true;
    const { email, name, subject, instituteName, message } = this.contactData;

    try {
      await send('service_rgio01t', 'template_bivi14a', {
        email,
        name,
        subject,
        instituteName,
        message
      });

      this.$alert.show('Email sent! Please wait for us to contact at your given email.', 'success', true, 10);
      this.initContactData();
      (this.$refs.baseFormRef as any)?.$refs?.baseFormRef?.reset?.();
    } catch (e) {
      this.$alert.show((e as Error).message, 'error');
    } finally {
      this.loading = false;
    }
  }
}
