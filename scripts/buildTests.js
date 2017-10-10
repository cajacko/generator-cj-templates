const path = require('path');
const fs = require('fs-extra');
const ejs = require('ejs');
const tests = require('./tests.json');

tests.forEach(({ controlDir, prompts }) => {
  const file = path.join(__dirname, `../__tests__/${controlDir}/index.js`);

  let backDir = '../';

  controlDir.split('/').forEach(() => {
    backDir += '../';
  });

  ejs.renderFile(
    path.join(__dirname, 'testTemplate.js'),
    {
      controlDir,
      backDir,
      prompts: prompts.map(prompt => {
        const newPrompt = Object.assign({}, prompt);

        if (typeof newPrompt.value === 'string') {
          newPrompt.value = `'${newPrompt.value}'`;
        }

        return newPrompt;
      })
    },
    {},
    function(err, str) {
      if (err) throw err;
      fs.outputFile(file, str);
    }
  );
});
