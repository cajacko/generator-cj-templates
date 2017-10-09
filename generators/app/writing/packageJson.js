const parseScripts = require('../helpers/parseScripts');

module.exports = function() {
  const file = {
    name: this.props.packageJsonName,
    version: '0.1.0',
    description: this.props.packageJsonDescription,
    author: {
      name: this.props.packageJsonAuthorName,
      email: this.props.packageJsonAuthorEmail,
      url: this.props.packageJsonAuthorUrl
    },
    license: 'MIT',
    keywords: this.props.packageJsonKeywords,
    repository: {
      type: 'git',
      url: `${this.props.packageJsonGithubUrl}.git`
    },
    homepage: `${this.props.packageJsonGithubUrl}#readme`,
    scripts: parseScripts(this.props.packageJsonScripts),
    engine: {
      node: '>=6.9.1'
    },
    bugs: {
      email: this.props.packageJsonAuthorEmail,
      url: `${this.props.packageJsonGithubUrl}/issues`
    }
  };

  this.fs.writeJSON(this.destinationPath('./package.json'), file);
};
