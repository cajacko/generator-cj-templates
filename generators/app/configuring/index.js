let switchTemplateConfiguring = require('../helpers/switchTemplateConfiguring');
let packageJson = require('./packageJson');

module.exports = function() {
  switchTemplateConfiguring = switchTemplateConfiguring.bind(this);
  packageJson = packageJson.bind(this);

  this._setProp('readmeTitle', this._getProp('templateName'));
  this._setProp('readmeDescription', this._getProp('projectDescription'));

  return Promise.resolve()
    .then(switchTemplateConfiguring)
    .then(this._getProp('packageJson') && packageJson);
};
