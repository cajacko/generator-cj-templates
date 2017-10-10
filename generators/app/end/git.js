module.exports = function() {
  this.spawnCommandSync('git', ['add', '-A']);
  this.spawnCommandSync('git', ['commit', '-m', 'Initial commit']);
  this.spawnCommandSync('git', [
    'remote',
    'add',
    'origin',
    `${this._getProp('githubUrl')}.git`
  ]);
};
