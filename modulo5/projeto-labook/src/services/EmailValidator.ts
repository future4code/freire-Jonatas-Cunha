import * as Validator from 'email-validator';

class EmailValidator {
    public validate(email: string): boolean {
        return Validator.validate(email);
    }
}

export default EmailValidator;