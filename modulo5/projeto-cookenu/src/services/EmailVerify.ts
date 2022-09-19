import * as EmailValidator from 'email-validator';

class EmailVerify {
    public verify(email: string): boolean {
        return EmailValidator.validate(email);
    };
}

export default EmailVerify;