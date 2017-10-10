let packageJson = require('./packageJson');
let templateName = require('./templateName');

module.exports = function() {
  templateName = templateName.bind(this);
  packageJson = packageJson.bind(this);

  return templateName().then(packageJson);
};
