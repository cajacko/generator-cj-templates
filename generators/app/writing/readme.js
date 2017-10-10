module.exports = function() {
  const title = this._getProp('readmeTitle');
  const description = this._getProp('readmeDescription');

  if (title) {
    this.fs.copyTpl(
      this.templatePath('readme/README.md'),
      this.destinationPath('README.md'),
      { title, description }
    );
  }
};
