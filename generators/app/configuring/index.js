const path = require('path');
let switchTemplateConfiguring = require('../helpers/switchTemplateConfiguring');
let packageJson = require('./packageJson');

module.exports = function() {
  switchTemplateConfiguring = switchTemplateConfiguring.bind(this);
  packageJson = packageJson.bind(this);

  if (this._getProp('destinationRoot')) {
    this.destinationRoot(path.join(this.env.cwd, this._getProp('templateSlug')));
  }

  this._setProp('readmeTitle', this._getProp('templateName'));
  this._setProp('readmeDescription', this._getProp('projectDescription'));

  return Promise.resolve()
    .then(switchTemplateConfiguring)
    .then(this._getProp('packageJson') && packageJson);
};
