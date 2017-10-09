module.exports = function() {
  this.props.packageJsonScripts = [
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
  ];

  this.props.readmeTitle = this.props.templateName;
  this.props.readmeDescription = this.props.projectDescription;
};
