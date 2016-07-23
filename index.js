const { writeFileSync } = require('fs');

const sass = require('node-sass');

const { IN_FILE, OUT_FILE } = require('./CONSTANTS');
const functions = require('./funcs');

const sassOpts = {
  file: IN_FILE,
  outFile: OUT_FILE,
  functions
};

sass.render(sassOpts, function (err, result) {
  if (err) {
    return console.error(err); // eslint-disable-line no-console
  }
  writeFileSync(sassOpts.outFile, result.css);
});
