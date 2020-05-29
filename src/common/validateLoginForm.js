export default function validate(credentials, isReset) {
  let errors = {};

  if (!credentials.email) {
    errors.emailIsEmpty = 'You need to enter your e-mail address';
  }

  if (credentials.email && !/\S+@\S+\.\S+/.test(credentials.email)) {
    errors.emailFormatInvalid = "Your e-mail format doesn't seem right";
  }

  if (!isReset) {
    if (!credentials.password) {
      errors.passIsEmpty = 'You need a password';
    }
    let strengthCheck = /^(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])(?=.*[0-9])(?=.*[a-z]).{8,250}$/;
    if (credentials.password && !credentials.password.match(strengthCheck))
      errors.passIsStrong = 'You need a stronger password';
  }

  return errors;
}
