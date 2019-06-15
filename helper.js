const fs = require("fs");
const jsdoc2md = require('jsdoc-to-markdown');

const functions = {
    "build:readme": () => {
        const readme = fs.readFileSync("README_TEMPLATE.md").toString();
        const docs = jsdoc2md.renderSync({files: "lib/index.js"});

        fs.writeFileSync("README.md", readme.replace("%DOCS%", docs));
    },
};

functions[process.argv[2]]();