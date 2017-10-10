/* eslint require-jsdoc: 0 */
'use strict';
const glob = require('glob');
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const fs = require('fs-extra');

function globPromise(globString, options) {
  return new Promise((resolve, reject) => {
    const actualOptions = Object.assign({}, options, {
      nodir: true,
      dot: true
    });
    glob(globString, actualOptions, function(err, files) {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

describe('<%= controlDir %>', () => {
  let controlFiles;
  let testFiles;
  const controlDir = path.join(__dirname, '<%= backDir %>testFiles/<%= controlDir %>');
  let testDir;

  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '<%= backDir %>generators/app'))
      .withPrompts({
        <% prompts.forEach(function({ key, value }){ -%>
          <%= key %>: <%- value %>,
        <% }); -%>
      })
      .then(dir => {
        testDir = dir;

        return Promise.all([
          globPromise('**/*', {
            cwd: controlDir
          }),
          globPromise('**/*', {
            cwd: testDir
          })
        ]);
      })
      .then(values => {
        controlFiles = values[0];
        testFiles = values[0];
      });
  });

  it('Contains files', () => {
    assert(controlFiles.length > 1);
  });

  it('Equal file count', () => {
    assert.equal(controlFiles.length, testFiles.length);
  });

  it('Equal file names', () => {
    controlFiles.forEach((controlFile, i) => {
      const testFile = testFiles[i];
      assert.equal(controlFile, testFile);
    });
  });

  it('Equal file contents', () => {
    const promises = [];

    controlFiles.forEach((controlFile, i) => {
      const testFile = testFiles[i];
      const controlFileAbsolute = path.join(controlDir, controlFile);
      const testFileAbsolute = path.join(testDir, testFile);

      promises.push(
        new Promise(resolve => {
          Promise.all([
            fs.readFile(controlFileAbsolute, 'utf8'),
            fs.readFile(testFileAbsolute, 'utf8')
          ]).then(values => {
            assert.equal(values[0], values[1], `<%= controlDir %>/${controlFile}\nExpected: Control\nReceived: Test`);
            resolve();
          });
        })
      );
    });

    return Promise.all(promises);
  });
});
