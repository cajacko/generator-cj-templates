const parseScripts = require('../helpers/parseScripts');

module.exports = function() {
  const dependencies = this._getProp('packageJsonDependencies') || {};
  const devDependencies = this._getProp('packageJsonDevDependencies') || {};

  if (this._getProp('eslint')) {
    devDependencies.eslint = '3.19.0';
    devDependencies['eslint-config-airbnb'] = '14.1.0';
    devDependencies['eslint-plugin-import'] = '2.2.0';
    devDependencies['eslint-plugin-jsx-a11y'] = '4.0.0';
    devDependencies['eslint-plugin-react'] = '6.10.3';
  }

  if (this._getProp('eslint') && this._getProp('flow')) {
    devDependencies['eslint-plugin-flowtype'] = '2.31.0';
  }

  if (this._getProp('eslint') && this._getProp('jest')) {
    devDependencies['eslint-plugin-jest'] = '21.2.0';
  }

  if (this._getProp('babel') && this._getProp('eslint')) {
    devDependencies['babel-eslint'] = '7.2.2';
    devDependencies['eslint-import-resolver-babel-module'] = '3.0.0';
  }

  if (this._getProp('babel')) {
    devDependencies['babel-cli'] = '6.24.1';
    devDependencies['babel-plugin-module-resolver'] = '2.7.0';
    devDependencies['babel-preset-es2015'] = '6.24.1';
    devDependencies['babel-preset-react'] = '6.24.1';
    devDependencies['babel-preset-stage-2'] = '6.24.1';
  }

  if (this._getProp('babel') && this._getProp('jest')) {
    devDependencies['babel-jest'] = '21.2.0';
  }

  if (this._getProp('babel') && this._getProp('flow')) {
    devDependencies['babel-plugin-transform-flow-strip-types'] = '6.22.0';
  }

  if (this._getProp('flow')) {
    devDependencies['flow-check'] = '0.2.2';
  }

  if (this._getProp('jest')) {
    devDependencies.jest = '21.2.1';
  }

  const file = {
    name: this._getProp('packageJsonName'),
    version: '0.1.0',
    description: this._getProp('packageJsonDescription'),
    author: {
      name: this._getProp('packageJsonAuthorName'),
      email: this._getProp('packageJsonAuthorEmail'),
      url: this._getProp('packageJsonAuthorUrl')
    },
    license: 'MIT',
    keywords: this._getProp('packageJsonKeywords'),
    repository: {
      type: 'git',
      url: `${this._getProp('packageJsonGithubUrl')}.git`
    },
    homepage: `${this._getProp('packageJsonGithubUrl')}#readme`,
    scripts: parseScripts(this._getProp('packageJsonScripts')),
    bin: parseScripts(this._getProp('packageJsonBin')),
    engine: {
      node: '>=6.9.1'
    },
    bugs: {
      email: this._getProp('packageJsonAuthorEmail'),
      url: `${this._getProp('packageJsonGithubUrl')}/issues`
    },
    dependencies,
    devDependencies
  };

  if (this._getProp('packageJsonMain')) {
    file.main = this._getProp('packageJsonMain');
  }

  this.fs.writeJSON(this.destinationPath('./package.json'), file);
};
