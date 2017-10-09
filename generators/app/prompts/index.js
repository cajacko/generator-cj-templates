let combineProps = require('../helpers/combineProps');
let npmModule = require('./npmModule');

module.exports = function() {
  combineProps = combineProps.bind(this);
  npmModule = npmModule.bind(this);

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

  return this.prompt(prompts)
    .then(props => combineProps(props))
    .then(() => {
      switch (this.props.template) {
        case 'npm-module':
          return npmModule();
        default:
          throw new Error(`No tempalte for ${this.props.template}`);
      }
    });
};
