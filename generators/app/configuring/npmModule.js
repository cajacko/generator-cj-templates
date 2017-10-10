const stringToArray = require('../helpers/stringToArray');

module.exports = function() {
  this._setProp('packageJsonMain', 'dist/index.js');

  const keywords = stringToArray(this._getProp('packageJsonKeywords')).concat([
    'node',
    'javascript',
    'npm'
  ]);

  this._setProp('packageJsonKeywords', keywords);

  const scripts = this._getProp('packageJsonScripts');

  scripts.push({
    key: 'publish',
    value: 'babel src --out-dir dist --ignore *.test.js && npm publish',
    order: 5
  });

  scripts.push({
    key: 'start',
    value: 'babel src --watch --out-dir dist --ignore *.test.js',
    order: 0
  });

  this._setProp('packageJsonScripts', scripts);

  this._setProp('eslint', true);
  this._setProp('flow', true);
  this._setProp('babel', true);
  this._setProp('jest', true);
};
