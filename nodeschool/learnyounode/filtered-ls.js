const fs = require("fs");
const path = require("path");
file = process.argv[2].toString();
extention = process.argv[3].toString();

fs.readdir(file, "buffer", (err, list) => {
  if (err) {
    return err;
  } else {
    let curratedList;
    curratedList = list.toString().split("\n");
    //   .filter((item) => (path.extname(item) === extention ? true : false));
    console.log(curratedList);
  }
});
