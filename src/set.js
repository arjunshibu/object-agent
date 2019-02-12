import { isNumber } from 'type-enforcer';
import parsePath from './utility/parsePath';

/**
 * Sets a nested value in an object.
 *
 * @example
 * ``` javascript
 * import { set } from 'object-agent';
 *
 * const thing = {
 *     a: [{
 *         b: 'c'
 *     }, {
 *         b: 'd'
 *     }]
 * };
 *
 * set(['a', '1', 'b'], thing, 'e');
 * console.log(thing);
 * // => {
 * //    a: [{
 * //        b: 'c'
 * //    }, {
 * //        b: 'e'
 * //    }]
 * //}
 * ```
 *
 * @function set
 *
 * @arg {Object} object
 * @arg {Array|String} path - If a string, gets split on '.'
 * @arg {*} value
 */
export default (object, path, value) => {
	path = parsePath(path);
	const last = path.length - 1;

	path.forEach((key, index) => {
		if (index === last) {
			object[key] = value;
		}
		else if (!object[key]) {
			object[key] = isNumber(path[index + 1], true) ? [] : {};
		}
		object = object[key];
	});
};