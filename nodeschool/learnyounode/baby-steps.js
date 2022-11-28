function sumation() {
  let sum = 0;
  let yes = 0;
  for (i = 2; i < process.argv.length; i++) {
    yes = process.argv[i];
    sum += +yes;
  }
  console.log(sum);
}

module.exports = sumation();
