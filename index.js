const { writeFileSync } = require('fs');

const sass = require('node-sass');
const inliner = require('sass-inline-svg');

const { IN_FILE, OUT_FILE, SVG_PATH } = require('./CONSTANTS');

const sassOpts = {
  file: IN_FILE,
  outFile: OUT_FILE,
  functions: {
    svg: inliner(SVG_PATH)
  }
};

sass.render(sassOpts, function (err, result) {
  if (err) {
    return console.error(err);
  }
  writeFileSync(sassOpts.outFile, result.css);
});
