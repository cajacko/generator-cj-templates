let combineProps = require('../helpers/combineProps');
let switchTemplatePrompt = require('../helpers/switchTemplatePrompt');

module.exports = function() {
  combineProps = combineProps.bind(this);
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
    this.props.template = this.options.template;
    return switchTemplatePrompt();
  }

  return this.prompt(prompts)
    .then(combineProps)
    .then(switchTemplatePrompt);
};
