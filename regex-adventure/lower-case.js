module.exports = function (str) {
  return /^[1-9]/.test(str) || /^[aeiou]/.test(str);
};
