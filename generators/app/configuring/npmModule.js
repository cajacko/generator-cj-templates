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
    key: 'build',
    value: 'babel src --out-dir dist --ignore *.test.js',
    order: 4
  });

  scripts.push({
    key: 'publish',
    value: 'npm run build && npm publish',
    order: 5
  });

  scripts.push({
    key: 'start',
    value: 'babel src --watch --out-dir dist --ignore *.test.js',
    order: 0
  });

  this._setProp('packageJsonScripts', scripts);

  const bins = this._getProp('packageJsonBin');

  bins.push({
    key: 'binCommand',
    value: 'node dist/bin.js',
    order: 0
  });

  this._setProp('packageJsonBin', bins);

  this._setProp('eslint', true);
  this._setProp('flow', true);
  this._setProp('babel', true);
  this._setProp('jest', true);
};
