module.exports = function() {
  const prompts = [
    {
      type: 'input',
      name: 'githubUrl',
      message:
        'Add a github url to set this up as a new repo. e.g. https://github.com/cajacko/generator-cj-templates\n',
      filter: string => {
        if (!string || string === '') {
          return null;
        }

        this._setProp('git', true);

        return string;
      },
      validate: string => {
        if (!string || string === '') {
          return true;
        }

        if (string.includes('.git')) {
          return 'URL should be the github web url, not the .git address';
        }

        return true;
      }
    }
  ];

  return this.prompt(prompts)
    .then(props => {
      const newProps = Object.assign({}, props);

      if (newProps.githubUrl === undefined) newProps.githubUrl = null;

      return newProps;
    })
    .then(this._combineProps);
};
