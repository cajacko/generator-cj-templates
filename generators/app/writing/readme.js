module.exports = function() {
  const { readmeTitle, readmeDescription } = this.props;

  if (readmeTitle) {
    this.fs.copyTpl(
      this.templatePath('readme/README.md'),
      this.destinationPath('README.md'),
      { title: readmeTitle, description: readmeDescription }
    );
  }
};
