let packageJson = require('./packageJson');
let editorConfig = require('./editorConfig');
let gitAttributes = require('./gitAttributes');
let gitignore = require('./gitignore');
let npmignore = require('./npmignore');
let readme = require('./readme');
let npmModule = require('./npmModule');
let eslint = require('./eslint');
let babel = require('./babel');
let flow = require('./flow');

module.exports = function() {
  packageJson = packageJson.bind(this);
  editorConfig = editorConfig.bind(this);
  gitAttributes = gitAttributes.bind(this);
  gitignore = gitignore.bind(this);
  npmignore = npmignore.bind(this);
  readme = readme.bind(this);
  npmModule = npmModule.bind(this);
  eslint = eslint.bind(this);
  babel = babel.bind(this);
  flow = flow.bind(this);

  if (this._getProp('eslint')) eslint();
  if (this._getProp('babel')) babel();
  if (this._getProp('flow')) flow();

  switch (this._getProp('template')) {
    case 'npm-module':
      packageJson();
      editorConfig();
      gitAttributes();
      gitignore();
      npmignore();
      readme();
      npmModule();
      break;

    default:
      return true;
  }
};
