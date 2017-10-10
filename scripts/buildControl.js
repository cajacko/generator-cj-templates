const path = require('path');
const helpers = require('yeoman-test');
const fs = require('fs-extra');
const tests = require('./tests.json');

tests.forEach(({ controlDir, prompts }) => {
  const actualPrompts = {};

  prompts.forEach(({ key, value }) => {
    actualPrompts[key] = value;
  });

  helpers
    .run(path.join(__dirname, '../generators/app'))
    .withPrompts(actualPrompts)
    .then(dir => fs.copy(dir, path.join(__dirname, '../testFiles', controlDir)));
});
