module.exports = function() {
  const file = {
    name: this.props.name,
    version: this.props.version,
    description: this.props.description,
    author: {
      name: this.props.authorName,
      email: this.props.authorEmail,
      url: this.props.authorUrl
    },
    license: this.props.license,
    keywords: this.props.keywords,
    repository: {
      type: 'git',
      url: `${this.props.github}.git`
    },
    homepage: `${this.props.github}#readme`,
    scripts: {
      'version:patch': 'npm version patch',
      'version:minor': 'npm version minor',
      'version:major': 'npm version major',
      publish: 'npm publish',
      precommit: 'npm test',
      prepush: 'npm test'
    },
    engine: {
      node: this.props.engine
    },
    bugs: {
      email: this.props.authorEmail,
      url: `${this.props.github}/issues`
    }
  };

  this.fs.writeJSON(this.destinationPath('./package.json'), file);
};
