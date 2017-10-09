'use strict';
const Generator = require('yeoman-generator');
let prompts = require('./prompts');
let writing = require('./writing');
let configuring = require('./configuring');

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

    this.props = {};

    this.argument('template', { type: String, required: false });

    prompts = prompts.bind(this);
    writing = writing.bind(this);
    configuring = configuring.bind(this);
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
   * Yeoman class to do config operations
   *
   * @return {[type]} [description]
   */
  configuring() {
    return configuring();
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
  }

  // Install() {
  //   this.installDependencies({
  //     npm: false,
  //     bower: false,
  //     yarn: true
  //   });
  // }
};
