module.exports = function() {
  this.fs.copy(
    this.templatePath('npmignore/.npmignore'),
    this.destinationPath('.npmignore')
  );
};
