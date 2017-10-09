let packageJson = require('./packageJson');
let editorConfig = require('./editorConfig');
let gitAttributes = require('./gitAttributes');

module.exports = function() {
  packageJson = packageJson.bind(this);
  editorConfig = editorConfig.bind(this);
  gitAttributes = gitAttributes.bind(this);

  switch (this.props.template) {
    case 'npm-module':
      packageJson();
      editorConfig();
      gitAttributes();
      break;

    default:
      return true;
  }
};
