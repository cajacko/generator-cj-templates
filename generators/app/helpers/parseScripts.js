module.exports = function(scripts) {
  const scriptsObj = {};

  if (scripts && scripts.length) {
    scripts
      .sort((a, b) => {
        return a.order - b.order;
      })
      .forEach(({ key, value }) => {
        scriptsObj[key] = value;
      });
  }

  return scriptsObj;
};
