'use strict';
const Generator = require('yeoman-generator');
let prompts = require('./prompts');
let writing = require('./writing');
let configuring = require('./configuring');
let install = require('./install');

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

    this.props = { packageJsonScripts: [] };

    this.argument('template', { type: String, required: false });

    prompts = prompts.bind(this);
    writing = writing.bind(this);
    configuring = configuring.bind(this);
    install = install.bind(this);
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
   * Yeoman method to write files
   *
   * @return {Promise} A promise to pause yeoman execution until it resolves
   */
  writing() {
    return writing();
  }

  /**
   * Yeoman method to install dependencies
   *
   * @return {Promise} A promise to pause yeoman execution until it resolves
   */
  install() {
    return install();
  }
};
