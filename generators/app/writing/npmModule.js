module.exports = function() {
  this.fs.copy(this.templatePath('npmModule/**/*'), this.destinationPath(''));
};
