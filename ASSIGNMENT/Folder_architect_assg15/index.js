const fs = require("fs");

// Read folder contents
fs.readdir("./documents", (err, files) => {
  if (err) {
    console.log("Error reading folder");
    return;
  }

  console.log("Files inside documents folder:");
  console.log(files);

  // Read each file content
  files.forEach((file) => {
    fs.readFile(`./documents/${file}`, "utf-8", (err, data) => {
      if (err) {
        console.log("Error reading file:", file);
        return;
      }

      console.log(`\nContent of ${file}:`);
      console.log(data);
    });
  });
});