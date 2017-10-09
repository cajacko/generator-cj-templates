let combineProps = require('../helpers/combineProps');
const stringToArray = require('../helpers/stringToArray');

module.exports = function() {
  combineProps = combineProps.bind(this);

  const prompts = [
    {
      type: 'input',
      name: 'name',
      message: 'name:',
      default: 'project-name'
    },
    {
      type: 'input',
      name: 'version',
      message: 'version:',
      default: '0.0.1'
    },
    {
      type: 'input',
      name: 'description',
      message: 'description:'
    },
    {
      type: 'input',
      name: 'github',
      message: 'github url:'
    },
    {
      type: 'input',
      name: 'keywords',
      message: 'keywords:',
      stringToArray
    },
    {
      type: 'input',
      name: 'authorName',
      message: 'author name:',
      store: true
    },
    {
      type: 'input',
      name: 'authorEmail',
      message: 'author email:',
      store: true
    },
    {
      type: 'input',
      name: 'authorUrl',
      message: 'authorUrl:',
      store: true
    },
    {
      type: 'input',
      name: 'license',
      message: 'license:',
      default: 'MIT',
      store: true
    },
    {
      type: 'input',
      name: 'engine',
      message: 'node engine:',
      default: '>=6.9.1',
      store: true
    }
  ];

  return this.prompt(prompts).then(props => combineProps(props));
};
