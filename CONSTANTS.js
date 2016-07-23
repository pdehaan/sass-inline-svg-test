const { join } = require('path');

module.exports = {
  IN_FILE: join(__dirname, 'static', 'main.scss'),
  OUT_FILE: join(__dirname, 'dist_api', 'main.css'),
  SVG_PATH: join(__dirname, 'static', 'images')
};
