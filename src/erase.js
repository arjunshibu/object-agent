/**
 * Deletes a property from an object, if the property exists.
 *
 * @example
 * ``` javascript
 * import { erase } from 'object-agent';
 *
 * const foo = {
 *     bar: 1,
 *     also: 2
 * };
 *
 * erase(foo, 'bar');
 *
 * console.log(foo);
 * // => {also: 2}
 * ```
 *
 * @function erase
 * @category Interaction
 *
 * @param {Object} object
 * @param {String} key
 *
 * @returns {boolean}
 */
export default (object, key) => typeof object === 'object' && object !== null && key in object && delete object[key];
