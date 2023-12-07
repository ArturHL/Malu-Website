import fs from "fs";
import path from "path";

const directoryPath = path.join(path.dirname(new URL(import.meta.url).pathname), "/components/pages");

fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  files.forEach((file) => {
    if (file.isDirectory()) {
      const jsxFilePath = path.join(directoryPath, file.name, "index.jsx");
      const cssFilePath = path.join(directoryPath, file.name, "index.css");

      if (!fs.existsSync(jsxFilePath)) {
        fs.writeFileSync(jsxFilePath, "", (err) => {
          if (err) throw err;
        });
      }

      if (!fs.existsSync(cssFilePath)) {
        fs.writeFileSync(cssFilePath, "", (err) => {
          if (err) throw err;
        });
      }
    }
  });
});
