'use strict';
const Generator = require('yeoman-generator');
let prompts = require('./prompts');
let writing = require('./writing');

module.exports = class extends Generator {
  /**
   * Initialise the class, define arguments and bind helper functions
   *
   * @param  {Object} args Args passed to yeoman
   * @param  {Object} opts Options passed to yeoman
   * @return {void}      No return value
   */
  constructor(args, opts) {
    super(args, opts);

    this.props = {
      packageJsonScripts: [
        {
          key: 'version:patch',
          value: 'npm version patch',
          order: 10
        },
        {
          key: 'version:minor',
          value: 'npm version minor',
          order: 1
        },
        {
          key: 'version:major',
          value: 'npm version major',
          order: 2
        },
        {
          key: 'publish',
          value: 'npm publish',
          order: 5
        }
      ]
    };

    this.argument('template', { type: String, required: false });

    prompts = prompts.bind(this);
    writing = writing.bind(this);
  }

  /**
   * Yeoman class to specify prompts
   *
   * @return {Promise} A promise to pause yeoman execution until it resolves
   */
  prompting() {
    return prompts();
  }

  /**
   * Custom method to clear the dir before running
   *
   * @return {Promise} A promise to pause yeoman execution until it resolves
   */
  removeDir() {
    this.fs.delete('*');
    this.fs.delete('.*');
  }

  /**
   * Yeoman methos to write files
   *
   * @return {Promise} A promise to pause yeoman execution until it resolves
   */
  writing() {
    return writing();
    // Const props = {
    //   title: 'Title of package',
    //   slug: 'title-of-package',
    //   description: 'A description'
    // };
    //
    // this.fs.copyTpl(this.templatePath('**/*'),
    // this.destinationPath(''), props);
    // this.fs.copyTpl(this.templatePath('**/.*'),
    // this.destinationPath(''), props);
  }

  // Install() {
  //   this.installDependencies({
  //     npm: false,
  //     bower: false,
  //     yarn: true
  //   });
  // }
};
