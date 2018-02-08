const {assert} = require('chai');
const mergeSort = require('../lib/mergeSort.js');

describe('Testing for Merge Sort', () => {

	let hugeArray = Array.from({length: 10}, () => Math.floor(Math.random() * 200000));

	it('Should sort a small aray of numbers', () => {
		let numbers = [5,4,3,2,1];
		assert.deepEqual(mergeSort(numbers), [1,2,3,4,5]);
	});

	it('Should sort a small array of letters', () => {
		let letters = ['w', 'h', 'o', 'd', 'a', 't'];
		assert.deepEqual(mergeSort(letters), [ 'a', 'd', 'h', 'o', 't', 'w' ]);
	});

	it('Should sort positive and negative numbers', () => {
		let allRange = [-5, 8, -7, 13, 2];
		assert.deepEqual(mergeSort(allRange), [-7, -5, 2, 8, 13]);
	});


	it('Should sort an array of 10000 random numbers', () => {
		let sorted = mergeSort(hugeArray);

		function correct() {
			for ( let i = 0; i < sorted.length - 1; i++ ) {
				if (sorted[i] > sorted[i+1]) {
					return false;
				}
				return true;
			}
		}
		assert.equal(correct(), true);
	});

});