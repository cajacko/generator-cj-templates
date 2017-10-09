/* eslint no-console: 0 */

console.log('File running');

export default function (text) {
  if (text) {
    console.log(text);
  } else {
    console.log('No text to log');
  }
}
