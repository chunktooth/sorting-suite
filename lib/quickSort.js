let array = Array.from({length: 10}, () => Math.floor(Math.random() * 10));

function quickSort(array) {
	if(array.length <= 1) {
		return array;
	} else {
		let pivot = array.pop();
		let greaterThan = [];
		let lesserThan = [];
		for (let i = 0; i < array.length; i++) {
			if(array[i] < pivot) {
				lesserThan.push(array[i]);
			} else{
				greaterThan.push(array[i]);
			}
		}
		return [...quickSort(lesserThan), pivot, ...quickSort(greaterThan)];
	}
}

quickSort(array);

module.exports = quickSort;