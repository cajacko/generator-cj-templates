'use strict';
const Generator = require('yeoman-generator');
let prompts = require('./prompts');
let writing = require('./writing');
let configuring = require('./configuring');
let install = require('./install');
const props = require('./constants/props');

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

    this.props = props;

    this.argument('template', { type: String, required: false });

    prompts = prompts.bind(this);
    writing = writing.bind(this);
    configuring = configuring.bind(this);
    install = install.bind(this);
    this._combineProps = this._combineProps.bind(this);
    this._propError = this._propError.bind(this);
    this._getProp = this._getProp.bind(this);
    this._setProp = this._setProp.bind(this);
  }

  /**
   * Private method to throw an error if a prop does not exist
   *
   * @param  {String} key The key of the prop to check
   * @return {void}     No return but throws an error if fails
   */
  _propError(key) {
    if (this.props[key] === undefined) {
      throw new Error(`
        Prop: "${key}" is not defined.

        All props must be defined in ./generators/app/constants/props
        This will make it easier to understand the config of the generators
      `);
    }
  }

  /**
   * Private method to combine props, whislt checking each prop is valid
   *
   * @param  {Object} props Props Object
   * @return {void}       No return, just sets this.props
   */
  _combineProps(props) {
    Object.keys(props).forEach(this._propError);

    this.props = Object.assign({}, this.props, props);
  }

  /**
   * Private method to get a desired prop. Will throw if prop doesn't exist.
   *
   * @param  {String} key The key of the prop to get
   * @return {any}     The value of the prop
   */
  _getProp(key) {
    this._propError(key);
    return this.props[key];
  }

  /**
   * Private method to set a prop. Will throw if the prop doesn't exist.
   *
   * @param {String} key   The key of the prop to get
   * @param {any} value The value to set the prop to
   * @return {void}     No return value
   */
  _setProp(key, value) {
    this._propError(key);
    this.props[key] = value;
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
