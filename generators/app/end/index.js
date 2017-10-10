let git = require('./git');

module.exports = function() {
  git = git.bind(this);

  return Promise.resolve().then(this._getProp('git') && git);
};
