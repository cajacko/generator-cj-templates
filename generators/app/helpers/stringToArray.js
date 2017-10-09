module.exports = function(string) {
  const keywords = [];

  string.split(',').forEach(keyword => {
    if (!keyword.length) {
      return false;
    }

    return keywords.push(keyword.trim());
  });

  return keywords;
};
