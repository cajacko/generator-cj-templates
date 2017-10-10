module.exports = [
  {
    controlDir: 'npm-module/default',
    prompts: {
      template: 'npm-module',
      projectDescription: 'Description of the project',
      packageJsonKeywords: 'keyword1, keyword2',
      packageJsonGithubUrl: 'https://github.com/cajacko/dummy-project-url'
    }
  },
  {
    controlDir: 'npm-module/custom',
    prompts: {
      templateName: 'Custom Project',
      templateSlug: 'different-slug',
      destinationRoot: false,
      template: 'npm-module',
      projectDescription: 'Custom description for a custom project',
      packageJsonKeywords: 'custom 1, custom 2',
      packageJsonGithubUrl: 'https://github.com/cajacko/custom-project-url',
      packageJsonAuthorName: 'Derek Dickleworthy',
      packageJsonAuthorEmail: 'derek@dickleworthy.com',
      packageJsonAuthorUrl: 'https://dickleworthy.com'
    }
  }
];
