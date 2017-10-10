const path = require('path');
const helpers = require('yeoman-test');
const fs = require('fs-extra');
const tests = require('./tests');

fs.emptyDir(path.join(__dirname, '../testFiles/')).then(() => {
  tests.forEach(({ controlDir, prompts }) => {
    helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts(prompts)
      .then(dir => fs.copy(dir, path.join(__dirname, '../testFiles', controlDir)));
  });
});
