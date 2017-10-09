module.exports = function() {
  this.fs.copy(
    this.templatePath('gitignore/.gitignore'),
    this.destinationPath('.gitignore')
  );
};
