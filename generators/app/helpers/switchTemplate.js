let npmModule = require('../prompts/npmModule');

module.exports = function() {
  npmModule = npmModule.bind(this);

  switch (this.props.template) {
    case 'npm-module':
      return npmModule();
    default:
      throw new Error(`No tempalte for "${this.props.template}"`);
  }
};
