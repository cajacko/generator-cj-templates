/* eslint require-jsdoc: 0 */
'use strict';
var glob = require('glob');
var path = require('path');
// Var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

function globPromise(globString, options) {
  return new Promise((resolve, reject) => {
    const actualOptions = Object.assign({}, options, { nodir: true });
    glob(globString, actualOptions, function(err, files) {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

// Glob(
//   'testFiles/npm-module/dummy-project/**/*',
//   { cwd: path.join(__dirname, '../') },
//   function(err, controlFiles) {
//     if (err) {
//       reject();
//       return;
//     }
//
//     const testPaths = controlFiles.map(file =>
//       file.replace('testFiles/npm-module/dummy-project/', '')
//     );
//
//     console.log(testPaths);
//
//     assert.file(testPaths);
//
//     console.log(files);
//     resolve();
//   }
// );

describe('generator-cj-templates:app', () => {
  it('creates files', () => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        template: 'npm-module',
        projectDescription: 'Description of the project',
        packageJsonKeywords: 'keyword1, keyword2',
        packageJsonGithubUrl: 'https://github.com/cajacko/generator-cj-templates'
      })
      .then(dir =>
        Promise.all([
          dir,
          globPromise('**/*', {
            cwd: path.join(__dirname, '../testFiles/npm-module/default')
          }),
          globPromise('**/*', {
            cwd: dir
          })
        ])
      )
      .then(values => {
        console.log(values);
      });
  });
});
