let array = Array.from({length: 10}, () => Math.floor(Math.random() * 10));

function insertionSort(array) {
	for(let i = 1; i < array.length; i++) {
		let temp = array[i];
		let j = i - 1;
		while(j >= 0 && array[j] > temp) {
				array[j +1] = array[j];
				j--;
		}
			array[j + 1] = temp;
	}	
	return array;
}

insertionSort(array);

module.exports = insertionSort;
