const path = require('path');
const fs = require('fs-extra');
const ejs = require('ejs');
const tests = require('./tests');

tests.forEach(({ controlDir, prompts }) => {
  const file = path.join(__dirname, `../__tests__/${controlDir}/index.js`);

  let backDir = '../';

  controlDir.split('/').forEach(() => {
    backDir += '../';
  });

  const promptsArr = [];

  Object.keys(prompts).forEach(key => {
    const prompt = { key, value: prompts[key] };

    if (typeof prompt.value === 'string') {
      prompt.value = `'${prompt.value}'`;
    }

    promptsArr.push(prompt);
  });

  ejs.renderFile(
    path.join(__dirname, 'testTemplate.js'),
    {
      controlDir,
      backDir,
      prompts: promptsArr
    },
    {},
    function(err, str) {
      if (err) throw err;
      fs.outputFile(file, str);
    }
  );
});
