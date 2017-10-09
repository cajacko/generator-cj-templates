let packageJson = require('./packageJson');

module.exports = function() {
  packageJson = packageJson.bind(this);

  packageJson();
};
