import AdaptableController from './AdaptableController';
import { MailAdapter } from '../Adapters/Email/MailAdapter';
import { randomString } from '../cryptoUtils';

export class MailController extends AdaptableController {
  setEmailVerificationStatus(user, status) {
    if (status == false) {
      user._email_verify_token = randomString(25);
    }
    user.emailVerified = status;
  }
  sendVerificationEmail(options) { 
    this.adapter.sendVerificationEmail(options);
  }
  sendMail(options) {
    this.adapter.sendMail(options);
  }
  expectedAdapterType() {
    return MailAdapter;
  }
}
