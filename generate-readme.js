const fs = require("fs");
const jsdoc2md = require('jsdoc-to-markdown');

const readme = fs.readFileSync("README_TEMPLATE.md").toString();
const docs = jsdoc2md.renderSync({ files: "lib/index.js" });

fs.writeFileSync("README.md", readme.replace("%DOCS%", docs));