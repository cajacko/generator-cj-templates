let npmModule = require('../configuring/npmModule');

module.exports = function() {
  npmModule = npmModule.bind(this);

  switch (this.props.template) {
    case 'npm-module':
      return npmModule();
    default:
      return true;
  }
};
