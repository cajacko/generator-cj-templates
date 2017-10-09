let packageJson = require('./packageJson');
let editorConfig = require('./editorConfig');

module.exports = function() {
  packageJson = packageJson.bind(this);
  editorConfig = editorConfig.bind(this);

  switch (this.props.template) {
    case 'npm-module':
      packageJson();
      editorConfig();
      break;

    default:
      return true;
  }
};
