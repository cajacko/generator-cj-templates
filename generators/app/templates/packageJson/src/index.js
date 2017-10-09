/* eslint no-console: 0 */

console.log('Index file running');

/**
 * Example export function
 *
 * @param  {?string} text Text to log
 * @return {void}      No return value
 */
export default function(text) {
  console.log('Test function');

  if (text) {
    console.log(text);
  } else {
    console.log('No text param given');
  }
}
