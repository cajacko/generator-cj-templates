module.exports = function(questions) {
  const prompts = [];

  questions.forEach(question => {
    if (question.valueOverride) {
      this.props[question.name] = question.valueOverride;
      return;
    }

    prompts.push(question);
  });

  return prompts;
};
