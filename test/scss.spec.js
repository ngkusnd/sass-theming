const { resolve } = require('path');
const { sync }    = require('glob');
const { runSass } = require('sass-true');

describe('SASS testing', () => {
  const files = sync(resolve(process.cwd(), 'test/**/*.spec.scss'));
 
  files.forEach((file) => runSass({ file }, { describe, it }));
});
