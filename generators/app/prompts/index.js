let combineProps = require('../helpers/combineProps');
let switchTemplate = require('../helpers/switchTemplate');

module.exports = function() {
  combineProps = combineProps.bind(this);
  switchTemplate = switchTemplate.bind(this);

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
    return switchTemplate();
  }

  return this.prompt(prompts)
    .then(props => combineProps(props))
    .then(switchTemplate);
};
