'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
let prompts = require('./prompts');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.props = {};
    this.argument('template', { type: String, required: false });

    prompts = prompts.bind(this);
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the wondrous ' + chalk.red('generator-cj-templates') + ' generator!'
      )
    );

    return prompts().then(() => console.log(this.props));
  }

  removeDir() {
    this.fs.delete('*');
  }

  writing() {
    const props = {
      title: 'Title of package',
      slug: 'title-of-package',
      description: 'A description'
    };

    this.fs.copyTpl(this.templatePath('**/*'), this.destinationPath(''), props);
    this.fs.copyTpl(this.templatePath('**/.*'), this.destinationPath(''), props);
  }

  // Install() {
  //   this.installDependencies({
  //     npm: false,
  //     bower: false,
  //     yarn: true
  //   });
  // }
};
