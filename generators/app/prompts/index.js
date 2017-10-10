let switchTemplatePrompt = require('../helpers/switchTemplatePrompt');

module.exports = function() {
  switchTemplatePrompt = switchTemplatePrompt.bind(this);

  const prompts = [
    {
      type: 'list',
      name: 'template',
      message: 'Which template would you like to run?',
      choices: [
        'react-part',
        'npm-module',
        'website',
        'desktop-app',
        'mobile-app',
        'isomorphic-app',
        'api'
      ]
    }
  ];

  if (this.options.template) {
    this._setProp('template', this.options.template || null);
    return switchTemplatePrompt();
  }

  return this.prompt(prompts)
    .then(this._combineProps)
    .then(switchTemplatePrompt);
};
