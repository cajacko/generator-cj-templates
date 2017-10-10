const titleToSlug = require('../helpers/titleToSlug');

module.exports = function() {
  const prompts = [
    {
      type: 'input',
      name: 'templateName',
      message: 'Template Name',
      default: 'New Project'
    },
    {
      type: 'input',
      name: 'templateSlug',
      message: 'What slug do you want for the project dir, npm name etc.',
      default: ({ templateName }) => {
        return titleToSlug(this._getProp('templateName') || templateName);
      }
    },
    {
      type: 'confirm',
      name: 'destinationRoot',
      message: 'Do you want to create a directory for this project?',
      default: true
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'description',
      validate: description => {
        if (!description || description === '') {
          return 'You must provide an description';
        }

        if (description.length < 5) {
          return 'You must provide a description with at least 5 characters';
        }

        return true;
      }
    }
  ];

  return this.prompt(prompts).then(this._combineProps);
};
