import { assert } from 'type-enforcer';
import { forOwnReduce } from '../index.js';

describe('forOwnReduce', () => {
	it('should return the reduced value', () => {
		const object = {
			key1: 'something1',
			key2: 'something2',
			key3: 'something3'
		};

		const output = forOwnReduce(object, (result, value, key) => {
			result.push([value, key]);
			return result;
		}, []);

		assert.equal(output, [['something1', 'key1'], ['something2', 'key2'], ['something3', 'key3']]);
	});

	it('should return the reduced value when mutated and not returned', () => {
		const object = {
			key1: 'something1',
			key2: 'something2',
			key3: 'something3'
		};

		const output = forOwnReduce(object, (result, value, key) => {
			result.push([value, key]);
		}, []);

		assert.equal(output, [['something1', 'key1'], ['something2', 'key2'], ['something3', 'key3']]);
	});
});
