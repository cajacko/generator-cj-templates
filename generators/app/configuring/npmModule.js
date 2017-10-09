module.exports = function() {
  this.props.packageJsonMain = 'dist/index.js';
  this.props.packageJsonKeywords.concat(['node', 'javascript', 'npm']);

  this.props.eslint = true;
  this.props.flow = true;
  this.props.babel = true;
  this.props.jest = true;
};
