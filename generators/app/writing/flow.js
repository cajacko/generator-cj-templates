module.exports = function() {
  this.fs.copy(this.templatePath('flow/.flowcheck'), this.destinationPath('.flowcheck'));

  this.fs.copy(
    this.templatePath('flow/.flowconfig'),
    this.destinationPath('.flowconfig')
  );
};
