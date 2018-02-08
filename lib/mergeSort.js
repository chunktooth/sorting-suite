let array = [5, 19, 4, 2, 0];


function mergeSort(array) {
	if(array.length <= 1) {
		return array;
	} else {
		let midIndex = Math.floor(array.length / 2);
		let leftArray = array.slice(0, midIndex);
		let rightArray = array.slice(midIndex);
		return merge(mergeSort(leftArray), mergeSort(rightArray));
	}
}

function merge(leftArray, rightArray) {
	let result = [];
	let R = 0; // right index to be incremented
	let L = 0; // left index to be incremented
	while(R < rightArray.length && L < leftArray.length) {
		if(rightArray[R] < leftArray[L]) {
			result.push(rightArray[R]); 
			R++;
		} else {
			result.push(leftArray[L]);
			L++;
		}
	}
		return result.concat(leftArray.slice(L)).concat(rightArray.slice(R));
}

mergeSort(array);

module.exports = mergeSort;