module.exports = function() {
  this.fs.copy(this.templatePath('eslint/.eslintrc'), this.destinationPath('.eslintrc'));

  this.fs.copy(
    this.templatePath('eslint/.eslintignore'),
    this.destinationPath('.eslintignore')
  );
};
