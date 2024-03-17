class Regex {
  static phone = /^[0-9]*$/;
  static optionalEmail = /^(?:[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})?$/i;
  static email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i;
  static decimal = /^[0-9]{1,7}(\.[0-9]{1,2})?$/;
  static decimalNumber = /^\d+\.?\d+$/;
}

export default Regex;
