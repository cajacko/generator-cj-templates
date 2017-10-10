let npmModule = require('../prompts/npmModule');
let git = require('../prompts/git');

module.exports = function() {
  npmModule = npmModule.bind(this);
  git = git.bind(this);

  switch (this._getProp('template')) {
    case 'npm-module':
      return git().then(npmModule);
    default:
      return true;
  }
};
