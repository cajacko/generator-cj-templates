const parseScripts = require('../helpers/parseScripts');

module.exports = function() {
  const dependencies = this.props.packageJsonDependencies || {};
  const devDependencies = this.props.packageJsonDevDependencies || {};

  if (this.props.eslint) {
    devDependencies.eslint = '3.19.0';
    devDependencies['eslint-config-airbnb'] = '14.1.0';
    devDependencies['eslint-plugin-import'] = '2.2.0';
    devDependencies['eslint-plugin-jsx-a11y'] = '4.0.0';
    devDependencies['eslint-plugin-react'] = '6.10.3';
  }

  if (this.props.babel && this.props.eslint) {
    devDependencies['babel-eslint'] = '7.2.2';
    devDependencies['eslint-import-resolver-babel-module'] = '3.0.0';
  }

  if (this.props.babel) {
    devDependencies['babel-cli'] = '6.24.1';
    devDependencies['babel-plugin-module-resolver'] = '2.7.0';
    devDependencies['babel-preset-es2015'] = '6.24.1';
    devDependencies['babel-preset-react'] = '6.24.1';
    devDependencies['babel-preset-stage-2'] = '6.24.1';
  }

  if (this.props.babel && this.props.jest) {
    devDependencies['babel-jest'] = '21.2.0';
  }

  if (this.props.babel && this.props.flow) {
    devDependencies['babel-plugin-transform-flow-strip-types'] = '6.22.0';
  }

  if (this.props.flow) {
    devDependencies['flow-check'] = '0.2.2';
  }

  if (this.props.jest) {
    devDependencies.jest = '21.2.1';
  }

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
    },
    dependencies,
    devDependencies
  };

  if (this.props.packageJsonMain) {
    file.main = this.props.packageJsonMain;
  }

  this.fs.writeJSON(this.destinationPath('./package.json'), file);
};
