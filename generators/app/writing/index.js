let packageJson = require('./packageJson');
let editorConfig = require('./editorConfig');
let gitAttributes = require('./gitAttributes');
let gitignore = require('./gitignore');
let npmignore = require('./npmignore');
let readme = require('./readme');
let npmModule = require('./npmModule');

module.exports = function() {
  packageJson = packageJson.bind(this);
  editorConfig = editorConfig.bind(this);
  gitAttributes = gitAttributes.bind(this);
  gitignore = gitignore.bind(this);
  npmignore = npmignore.bind(this);
  readme = readme.bind(this);
  npmModule = npmModule.bind(this);

  switch (this.props.template) {
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
