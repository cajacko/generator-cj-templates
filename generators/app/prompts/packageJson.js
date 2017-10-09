let combineProps = require('../helpers/combineProps');
const stringToArray = require('../helpers/stringToArray');

module.exports = function() {
  combineProps = combineProps.bind(this);

  let prompts = [
    {
      type: 'input',
      name: 'packageJsonName',
      message: 'name',
      default: this.props.templateSlug || 'project-name'
    },
    {
      type: 'input',
      name: 'packageJsonDescription',
      message: 'description',
      default: this.props.projectDescription || ''
    },
    {
      type: 'input',
      name: 'packageJsonGithubUrl',
      message: 'github url, e.g. https://github.com/cajacko/generator-cj-templates\n'
    },
    {
      type: 'input',
      name: 'packageJsonKeywords',
      message: 'keywords',
      stringToArray
    },
    {
      type: 'input',
      name: 'packageJsonAuthorName',
      message: 'author name',
      default: 'Charlie Jackson',
      store: true
    },
    {
      type: 'input',
      name: 'packageJsonAuthorEmail',
      message: 'author email',
      default: 'contact@charliejackson.com',
      store: true
    },
    {
      type: 'input',
      name: 'packageJsonAuthorUrl',
      message: 'author url',
      default: 'https://charliejackson.com',
      store: true
    }
  ];

  prompts = prompts.map(prompt => {
    const newPrompt = Object.assign({}, prompt);
    newPrompt.message = `package.json: ${newPrompt.message}`;
    return newPrompt;
  });

  return this.prompt(prompts).then(props => combineProps(props));
};
