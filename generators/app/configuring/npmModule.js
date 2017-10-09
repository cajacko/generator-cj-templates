module.exports = function() {
  this.props.packageJsonMain = 'dist/index.js';
  this.props.packageJsonKeywords.concat(['node', 'javascript', 'npm']);
};
