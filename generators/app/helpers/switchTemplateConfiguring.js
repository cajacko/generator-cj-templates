let npmModule = require('../configuring/npmModule');

module.exports = function() {
  npmModule = npmModule.bind(this);

  switch (this._getProp('template')) {
    case 'npm-module':
      return npmModule();
    default:
      return true;
  }
};
