const path = require('path');
const helpers = require('yeoman-test');
const fs = require('fs-extra');
const tests = require('./tests');
const spawn = require('child_process').spawn;

let i = 0;

process.argv.forEach(arg => {
  if (arg.includes('--i=')) {
    i = parseInt(arg.replace('--i=', ''), 10);
  }
});

if (i === 0) {
  fs.emptyDirSync(path.join(__dirname, '../testFiles/'));
}

const test = tests[i];

if (test) {
  const { prompts, controlDir } = test;

  helpers
    .run(path.join(__dirname, '../generators/app'))
    .withPrompts(prompts)
    .then(dir => fs.copy(dir, path.join(__dirname, '../testFiles', controlDir)));

  i += 1;

  const ls = spawn('npm', ['run', 'build:control', '--', `--i=${i}`]);

  ls.stderr.on('data', data => {
    console.error(`${data}`);
  });

  ls.on('close', code => {
    if (code) {
      throw new Error(code);
    }
  });
}
