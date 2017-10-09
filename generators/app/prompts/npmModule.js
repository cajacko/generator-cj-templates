let combineProps = require('../helpers/combineProps');
let packageJson = require('./packageJson');
let templateName = require('./templateName');

module.exports = function() {
  combineProps = combineProps.bind(this);
  templateName = templateName.bind(this);
  packageJson = packageJson.bind(this);

  return templateName().then(packageJson);
};
