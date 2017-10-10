module.exports = function() {
  this.props.packageJsonScripts.push({
    key: 'version:patch',
    value: 'npm version patch',
    order: 10
  });

  this.props.packageJsonScripts.push({
    key: 'version:minor',
    value: 'npm version minor',
    order: 11
  });

  this.props.packageJsonScripts.push({
    key: 'version:major',
    value: 'npm version major',
    order: 12
  });

  let testScript = '';

  if (this.props.eslint) {
    testScript += 'eslint src';
  }

  if (this.props.jest) {
    testScript += ' & jest --coverage';
  }

  if (this.props.flow) {
    testScript += ' & flow-check --skip-check';
  }

  if (testScript !== '') {
    this.props.packageJsonScripts.push({
      key: 'test',
      value: testScript,
      order: 2
    });
  }
};
