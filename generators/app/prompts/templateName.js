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
      type: 'input',
      name: 'projectDescription',
      message: 'description'
    }
  ];

  return this.prompt(prompts).then(this._combineProps);
};
