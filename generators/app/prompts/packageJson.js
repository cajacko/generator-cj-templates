let buildQuestions = require('../helpers/buildQuestions');

module.exports = function() {
  buildQuestions = buildQuestions.bind(this);

  this._setProp('packageJson', true);

  let prompts = [
    {
      type: 'input',
      name: 'packageJsonName',
      message: 'name',
      default: 'project-name',
      valueOverride: this._getProp('templateSlug')
    },
    {
      type: 'input',
      name: 'packageJsonDescription',
      message: 'description',
      valueOverride: this._getProp('projectDescription')
    },
    {
      type: 'input',
      name: 'packageJsonGithubUrl',
      message: 'github url, e.g. https://github.com/cajacko/generator-cj-templates\n',
      valueOverride: this._getProp('githubUrl')
    },
    {
      type: 'input',
      name: 'packageJsonKeywords',
      message: 'keywords',
      valueOverride: this._getProp('keywords')
    },
    {
      type: 'input',
      name: 'packageJsonAuthorName',
      message: 'author name',
      default: 'Charlie Jackson',
      store: true,
      valueOverride: this._getProp('authorName')
    },
    {
      type: 'input',
      name: 'packageJsonAuthorEmail',
      message: 'author email',
      default: 'contact@charliejackson.com',
      store: true,
      valueOverride: this._getProp('authorEmail')
    },
    {
      type: 'input',
      name: 'packageJsonAuthorUrl',
      message: 'author url',
      default: 'https://charliejackson.com',
      store: true,
      valueOverride: this._getProp('authorUrl')
    }
  ];

  prompts = prompts.map(prompt => {
    const newPrompt = Object.assign({}, prompt);
    newPrompt.message = `package.json: ${newPrompt.message}`;
    return newPrompt;
  });

  prompts = buildQuestions(prompts);

  return this.prompt(prompts).then(this._combineProps);
};
