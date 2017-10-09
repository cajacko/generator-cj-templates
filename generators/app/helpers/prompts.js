module.exports = function() {
  const prompts = [
    {
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }
  ];

  return this.prompt(prompts).then(props => {
    // To access props later use this.props.someAnswer;
    this.props = props;
  });
};
