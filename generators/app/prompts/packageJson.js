let combineProps = require('../helpers/combineProps');
const stringToArray = require('../helpers/stringToArray');
let buildQuestions = require('../helpers/buildQuestions');

module.exports = function() {
  combineProps = combineProps.bind(this);
  buildQuestions = buildQuestions.bind(this);

  let prompts = [
    {
      type: 'input',
      name: 'packageJsonName',
      message: 'name',
      default: 'project-name',
      valueOverride: this.props.templateSlug
    },
    {
      type: 'input',
      name: 'packageJsonDescription',
      message: 'description',
      valueOverride: this.props.projectDescription
    },
    {
      type: 'input',
      name: 'packageJsonGithubUrl',
      message: 'github url, e.g. https://github.com/cajacko/generator-cj-templates\n',
      valueOverride: this.props.githubUrl
    },
    {
      type: 'input',
      name: 'packageJsonKeywords',
      message: 'keywords',
      stringToArray,
      valueOverride: this.props.keywords
    },
    {
      type: 'input',
      name: 'packageJsonAuthorName',
      message: 'author name',
      default: 'Charlie Jackson',
      store: true,
      valueOverride: this.props.authorName
    },
    {
      type: 'input',
      name: 'packageJsonAuthorEmail',
      message: 'author email',
      default: 'contact@charliejackson.com',
      store: true,
      valueOverride: this.props.authorEmail
    },
    {
      type: 'input',
      name: 'packageJsonAuthorUrl',
      message: 'author url',
      default: 'https://charliejackson.com',
      store: true,
      valueOverride: this.props.authorUrl
    }
  ];

  prompts = prompts.map(prompt => {
    const newPrompt = Object.assign({}, prompt);
    newPrompt.message = `package.json: ${newPrompt.message}`;
    return newPrompt;
  });

  prompts = buildQuestions(prompts);

  return this.prompt(prompts).then(props => combineProps(props));
};
