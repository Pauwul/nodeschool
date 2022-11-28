module.exports = function (str) {
  return /^[^0-9]/.test(str) && /^.[^A-Z]/.test(str);
  //   return /^[^0-9][^A-Z]/.test(str)

  // \d - digits [0-9]
  // \w - word character [A-Za-z_]
  // \s = whitespace (such as \t \r \n \f)

  // \D - [^0-9]
  // \W - not a word etc
  // \S - not whitespace [^ \t\r\n\f]
};
