let switchTemplateConfiguring = require('../helpers/switchTemplateConfiguring');
let packageJson = require('./packageJson');

module.exports = function() {
  switchTemplateConfiguring = switchTemplateConfiguring.bind(this);
  packageJson = packageJson.bind(this);

  this.props.readmeTitle = this.props.templateName;
  this.props.readmeDescription = this.props.projectDescription;

  return Promise.resolve()
    .then(switchTemplateConfiguring)
    .then(this.props.packageJson && packageJson);
};
