module.exports = [
  {
    controlDir: 'npm-module/woo',
    prompts: {
      template: 'npm-module',
      projectDescription: 'Description of the project',
      packageJsonKeywords: 'keyword1, keyword2',
      packageJsonGithubUrl: 'https://github.com/cajacko/dummy-project-url'
    }
  },
  {
    controlDir: 'npm-module/test',
    prompts: {
      template: 'npm-module',
      projectDescription: 'Description of the project',
      packageJsonKeywords: 'keyword1, keyword2',
      packageJsonGithubUrl: 'https://github.com/cajacko/dummy-project-url'
    }
  }
  // {
  //   controlDir: 'npm-module/custom',
  //   prompts: {
  //     templateName: 'Custom Project',
  //     templateSlug: 'different-slug',
  //     destinationRoot: false,
  //     template: 'npm-module',
  //     projectDescription: 'Custom description for a custom project',
  //     packageJsonKeywords: 'custom 1, custom 2',
  //     packageJsonGithubUrl: 'https://github.com/cajacko/custom-project-url',
  //     authorName: 'Derek Dickleworthy',
  //     authorEmail: 'derek@dickleworthy.com',
  //     authorUrl: 'https://dickleworthy.com'
  //   }
  // }
];
