module.exports = function() {
  const scripts = this._getProp('packageJsonScripts');

  scripts.push({
    key: 'version:patch',
    value: 'npm version patch',
    order: 10
  });

  scripts.push({
    key: 'version:minor',
    value: 'npm version minor',
    order: 11
  });

  scripts.push({
    key: 'version:major',
    value: 'npm version major',
    order: 12
  });

  let testScript = '';

  if (this._getProp('eslint')) {
    testScript += 'eslint src';
  }

  if (this._getProp('jest')) {
    testScript += ' && jest --coverage';

    scripts.push({
      key: 'jest:watch',
      value: 'jest --watch --coverage',
      order: 3
    });
  }

  if (this._getProp('flow')) {
    testScript += ' && flow-check --skip-check';
  }

  if (testScript !== '') {
    scripts.push({
      key: 'test',
      value: testScript,
      order: 2
    });
  }

  this._setProp('packageJsonScripts', scripts);
};
