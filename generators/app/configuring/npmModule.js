module.exports = function() {
  this.props.packageJsonMain = 'dist/index.js';
  this.props.packageJsonKeywords.concat(['node', 'javascript', 'npm']);

  this.props.packageJsonScripts.push({
    key: 'publish',
    value: 'babel src --out-dir dist --ignore *.test.js && npm publish',
    order: 3
  });

  this.props.packageJsonScripts.push({
    key: 'start',
    value: 'babel src --watch --out-dir dist --ignore *.test.js',
    order: 0
  });

  this.props.eslint = true;
  this.props.flow = true;
  this.props.babel = true;
  this.props.jest = true;
};
