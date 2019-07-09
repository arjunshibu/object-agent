import walkPath from './utility/walkPath';

/**
 * Gets a nested value from an object.
 *
 * @example
 * ``` javascript
 * import { get } from 'object-agent';
 *
 * const thing = {
 *     a: [{
 *         b: 'c'
 *     }, {
 *         b: 'd'
 *     }]
 * };
 *
 * get(thing, ['a', 1, 'b']);
 * // => 'd'
 * ```
 *
 * @function get
 *
 * @arg {Object} object
 * @arg {Array|String} path - If a string, gets split on '.'
 *
 * @returns {*}
 */
export default (object, path) => {
	walkPath(path, (key) => {
		object = object[key];

		return object === undefined;
	});

	return object;
};
