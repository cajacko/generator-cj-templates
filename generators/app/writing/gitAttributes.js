module.exports = function() {
  this.fs.copy(
    this.templatePath('gitattributes/.gitattributes'),
    this.destinationPath('.gitattributes')
  );
};
