module.exports = function() {
  this.fs.copy(
    this.templatePath('editorconfig/.editorconfig'),
    this.destinationPath('.editorconfig')
  );
};
