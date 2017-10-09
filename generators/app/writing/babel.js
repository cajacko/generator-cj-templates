module.exports = function() {
  this.fs.copy(this.templatePath('babel/.babelrc'), this.destinationPath('.babelrc'));
};
