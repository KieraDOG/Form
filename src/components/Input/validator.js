const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const MOBILE_REGEX = /^(04)\d{8}/;

export default {
  isNotEmpty: (value) => !!value,
  isEmail: (value) => EMAIL_REGEX.test(value),
  isMobile: (value) => MOBILE_REGEX.test(value),
  isIdentical: (value, { getTarget }) => value === getTarget(),
};