module.exports = function (str) {
  return /\.$/.test(str);

  // cases where backslashes are necessary in regex:
  //. * + ? [ ] ( ) ^ $ { } | \
};
