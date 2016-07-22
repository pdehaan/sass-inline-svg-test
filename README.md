# sass-inline-svg-test

Inline some SVGs in Sass using [**node-sass**](http://npm.im/node-sass) and [**sass-inline-svg**](http://npm.im/sass-inline-svg).

## Usage:

### Using node-sass and sass-inline-svg as an API:

```js
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
```

### Using node-sass and sass-inline-svg via the CLI:

```sh
$ node-sass static/main.scss --functions ./funcs.js > dist2/main.css
```

Where our ./funcs.js file exports our desired functions:

```js
const inliner = require('sass-inline-svg');

const { SVG_PATH } = require('./CONSTANTS');

module.exports = {
  svg: inliner(SVG_PATH)
};
```

## INPUT:

```sass
.logo-icon {
  background: svg('logo.svg');
  height: 20px;
  width: 20px;
}
```

## OUTPUT:

```css
.logo-icon {
  background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy4yLjIgKDk5ODMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmRlbGV0ZS10aHVtYm5haWw8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI4IiBzdHJva2U9IiNmZjAwMDAiIGZpbGw9IndoaXRlIiAvPgogICAgICAgIDxwYXRoIGQ9Ik01LjAwNTAyNTI1LDE0LjAwNTAyNTMgTDQuNTEwMDUwNTEsMTQuNSBMNS41LDE1LjQ4OTk0OTUgTDUuOTk0OTc0NzUsMTQuOTk0OTc0NyBMMTQuOTk0OTc0Nyw1Ljk5NDk3NDc1IEwxNS40ODk5NDk1LDUuNSBMMTQuNSw0LjUxMDA1MDUxIEwxNC4wMDUwMjUzLDUuMDA1MDI1MjUgTDUuMDA1MDI1MjUsMTQuMDA1MDI1MyBaIiBpZD0iTGluZSIgZmlsbD0iI0ZGMDAwMCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik01Ljk5NDk3NDc1LDUuMDA1MDI1MjUgTDUuNSw0LjUxMDA1MDUxIEw0LjUxMDA1MDUxLDUuNSBMNS4wMDUwMjUyNSw1Ljk5NDk3NDc1IEwxNC4wMDUwMjUzLDE0Ljk5NDk3NDcgTDE0LjUsMTUuNDg5OTQ5NSBMMTUuNDg5OTQ5NSwxNC41IEwxNC45OTQ5NzQ3LDE0LjAwNTAyNTMgTDUuOTk0OTc0NzUsNS4wMDUwMjUyNSBaIiBpZD0iTGluZS0yIiBmaWxsPSIjRkYwMDAwIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgIDwvZz4KPC9zdmc+Cg==");
  height: 20px;
  width: 20px; }
```
