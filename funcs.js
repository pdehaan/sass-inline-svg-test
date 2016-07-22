const inliner = require('sass-inline-svg');

const { SVG_PATH } = require('./CONSTANTS');

module.exports = {
  svg: inliner(SVG_PATH)
};
